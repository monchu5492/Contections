class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :name, :bio, :address, :profile_pic, :owned_events, :joined_events
  # has_many :join_events
  # has_many :events

  def owned_events
    self.object.events
  end

  def joined_events
    self.object.join_events.map {|j_event| }
    jevents = JoinEvent.all.filter {|ev| ev.user_id == self.object.id}
    newEvents = jevents.map {|ev| Event.find(ev.event_id)}
    return newEvents
  end

end
