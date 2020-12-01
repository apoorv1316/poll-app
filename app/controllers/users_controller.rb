class UsersController < ApplicationController

  def create
  
    @user = User.new(params.require(:user).permit(:name, :email, :password,))

    if @user.save
      render status: :ok , json: {notice: "Account created successfully"}
    else
      render status: :unprocessable_entity, json:{errors: @user.errors.full_messages}
    end
  end
end
