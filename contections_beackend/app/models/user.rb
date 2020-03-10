class User < ApplicationRecord
    has_secure_password
    validates :user_name, uniqueness: { case_sensitive: false }
    has_many :join_events, dependent: :destroy
    has_many :events, dependent: :destroy
end
    
