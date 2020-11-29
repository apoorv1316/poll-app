class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :poll

  def vote_increment(id)
    case id
    when "option1"
      self.option1 +=1
    when "option2"
      self.option2 +=1
    when "option3"
      self.option3 +=1
    when "option4"
      self.option4 +=1
    else
      self
    end
  end
  
end
