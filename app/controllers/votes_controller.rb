
class VotesController < ApplicationController
  before_action :current_user, :get_poll
  
  def create
    unless logged_in?
      render status: :forbidden, json:  { error: "User is not logged in" } 
    end

    unless has_voted(params[:poll_id])

        @vote =  @poll.votes.new if @poll.present?
        @vote.user_id = current_user.id      
        @vote.vote_increment(params[:option])

        if @vote.save
          votes = Vote.where(poll_id: params[:poll_id])
          votes_count = Hash.new(0)
          votes_count["option1"] = votes.sum(:option1)
          votes_count["option2"] = votes.sum(:option2)
          votes_count["option3"] = votes.sum(:option3)
          votes_count["option4"] = votes.sum(:option4)
          
          render status: :ok, json: { vote_data: { votes: votes_count} }
        end
    else
      render status: :forbidden, json:  { error: "User has already voted" } 
    end
  end


  

  private
    def has_voted(id)
      temp = Vote.find_by(poll_id: id, user_id: current_user.id)
      if temp.present?
        return true
      else
        return false
      end

    end

    def get_poll
      @poll = Poll.find(params[:poll_id]) if params[:poll_id].present?
    end

   
end