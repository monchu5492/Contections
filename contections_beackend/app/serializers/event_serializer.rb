class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :picture, :links, :description, :address, :user
  has_one :user
  has_many :join_events
end
