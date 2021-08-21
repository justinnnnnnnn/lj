class Api::UsersController < ApplicationController
 def create 
    @user = User.new(user_params)
    if @user.save 
      login(@user)
      render "api/users/show"
    else 
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
<<<<<<< HEAD
    @user = User.find_by(id: params[:id])
    @user.buying_power = params[:buyingPower].to_d
    @user.save!
    render :show
=======
    @user = User.find_by(params)
>>>>>>> parent of 5611150 (sdisplay backend buying power on stock page)
  end

  private 

  def user_params 
    params.require(:user).permit(:username, :password)
  end

end
