class SessionsController < ApplicationController

  def new
    render
  end

  def create
    user = User.find_by(email: params[:session][:user][:email])
    if user && user.authenticate(params[:session][:user][:password])
     log_in user 
     render status: :ok, json: {notice: "Logged in successfully"}
    else
      render status: :unprocessable_entity, json: {errors: ["Invalid email/password combination"]}
    end
  end
  def destroy
    logout if logged_in?
    render status: :ok, json: {notice: "loggedout successfully"}
  end
end
