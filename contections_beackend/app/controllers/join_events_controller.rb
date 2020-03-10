class JoinEventsController < ApplicationController
    def index
        join_event = JoinEvent.all
        puts join_event
        render json: join_event
    end

    def show
        join_event = JoinEvent.find(params[:id])
        render json: join_event
    end

    def create
        puts "YOU ARE JOINING AN EVENT"
        join_event = JoinEvent.new(params.require(:join_event).permit(:user_id, :event_id))
        if join_event.save
            render json: join_event   
        else
        #   flash[:message] = join_event.errors.full_messages
        end    
    end

    def update
        join_event = JoinEvent.find(params[:id])
        join_event.update(params.require(:join_event).permit(:user_id, :event_id))
        render json: join_event
    end

    def destroy
    @join_event = JoinEvent.find(params[:id])
    @temp = @join_event
    @join_event.delete
    render :json => @temp 
    # {message: 'Your join_event has been removed!'}
    end
end
