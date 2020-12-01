class User < ApplicationRecord
  has_secure_password
  has_many :votes
  validates :name, presence: true
  validates :email, format: {with: /\S+@\S/}, uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: { minimum: 6 }
end
