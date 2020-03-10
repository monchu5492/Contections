class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]
 
  def create
    @user = User.find_by(user_name: user_login_params[:user_name])
    #User#authenticate comes from BCrypt
    if @user && @user.authenticate(user_login_params[:password])
      # encode token comes from ApplicationController
      token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end
 
  def show
    user = User.find_by(id: user_id)
    if logged_in?
      render json: { id: user.id, user_name: user.user_name, name:user.name, bio: user.bio, address: user.address, profile_pic: user.profile_pic, owned_events: user.owned_events, joined_events:user.joined_events}
    else
      render json: {error: "No user found"}, status: 401
    end
  end

  private
 
  def user_login_params
    # params { user: {username: 'Chandler Bing', password: 'hi' } }
    params.require(:user).permit(:user_name, :password)
  end
end