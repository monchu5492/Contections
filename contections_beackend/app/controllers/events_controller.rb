class EventsController < ApplicationController
    def index
        event = Event.all
        puts event
        render json: event
    end

    def show
        event = Event.find(params[:id])
        render json: event
    end

    def create
        event = Event.new(params.require(:event).permit(:name, :picture, :links, :description, :address, :user_id))
        if event.save
            render json: event   
        else
        #   flash[:message] = event.errors.full_messages
        end    
    end

    def update
        event = Event.find(params[:id])
        event.update(params.require(:event).permit(:name, :picture, :links, :description, :address, :user_id))
        render json: event
    end

    def destroy
        puts "params"
        @event = Event.find(params[:id])
        @temp = @event
        @event.destroy
        render :json => @temp 
        # {message: 'Your event has been removed!'}
    end
end
