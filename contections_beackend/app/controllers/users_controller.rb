class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create]

    def index
    user = User.all
    puts user
    render json: user
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
      end
     
      def create
        @user = User.create(user_params)
        if @user.valid?
          @token = encode_token({ user_id: @user.id })
          render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
        else
          render json: { error: 'failed to create user' }, status: :not_acceptable
        end
      end

      def attendEvent
        puts "YOU HAVE ATEMPTED TO JOIN AN EVENT"
        # event = Event.find_by(id: params[:event_id])
        # user = User.find_by(id: parmas[:user_id])
        puts params
        join = JoinEvent.new(params)
        puts join

      end

    def update
        user = User.find(params[:id])
        user.update(params.require(:user).permit(:user_name, :name, :bio, :address, :profile_pic, :password))
        render json: user
    end

#   def destroy
#       user = User.find(params[:id])
#       user.destroy
#       render json: {message: 'Your user has been removed!'}
#   end

    def destroy
    @user = User.find(params[:id])
    @temp = @user
    @user.delete
    render :json => @temp 
    # {message: 'Your user has been removed!'}
    end

    private
  def user_params
    params.require(:user).permit(:user_name, :name, :bio, :address, :profile_pic, :password)
  end
end
