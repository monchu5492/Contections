class ApplicationController < ActionController::API

  before_action :authorized
 
  def encode_token(payload)
    # should store secret in env variable
    JWT.encode(payload, 'my_s3cr3t')
  end
 
  def auth_header
    # { Authorization: 'Bearer <token>' }
    request.headers['Authorization']
  end

  def token
    # header: { 'Authorization': 'Bearer <token>' }
    request.headers['Authorization']
  end
 
  def decoded_token
      begin
        JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        [{error: "Invalid Token"}]
      end
  end

  def user_id
    decoded_token.first['user_id']
  end
 
  def current_user
      @user ||= User.find_by(id: user_id)
  end
 
  def logged_in?
    !!current_user
  end
 
  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end
end
