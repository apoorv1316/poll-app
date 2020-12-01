class PollsController < ApplicationController
  def index
    @polls = Poll.all
  end
  def create
    if logged_in?
        @poll = Poll.new(poll_params)
      if @poll.save
        render status: :ok , json: {notice: "Poll created"}
      else
        render status: :unprocessable_entity, json:{errors: @poll.errors.full_messages}

      end          
    end  
  end
  private

  def poll_params
    params.require(:poll).permit(:question, :option1, :option2, :option3, :option4)
  end
end


