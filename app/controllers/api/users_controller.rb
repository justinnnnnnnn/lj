class Api::UsersController < ApplicationController

 def show
  @user = User.find_by(id: params[:id])
 end

  def create 
    @user = User.new(user_params)
    @user.buying_power = 9001.to_d 
    if @user.save
      login(@user)
      render "api/users/show"
    else 
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    @user.buying_power = params[:buyingPower].to_d
    @user.save!
    render :show
  end

  private 

  def user_params 
    params.require(:user).permit(:username, :password)
  end

end
