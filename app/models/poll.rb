class Poll < ApplicationRecord
  has_many :votes
  
  validates :question, presence: true, length: { maximum: 30 }
  validates :option1, presence: true, length: { maximum: 30 }
  validates :option2, presence: true, length: { maximum: 30 }
  validates :option3, presence: true, length: { maximum: 30 }
  validates :option4, presence: true, length: { maximum: 30 }
end
