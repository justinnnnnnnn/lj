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

    # def update 
    #     @user = selected_user
    #     if @user && @user.update(user_params)
    #         render :show 
    #     elsif !@user 
    #         render json: ['Could not find User'], status: 400
    #     else 
    #         render json: @user.errors.full_messages, status: 401
    #     end
    # end 

    # def show 
    #     @user = selected_user
    # end 

    # def index 
    #     @users = User.all
    # end 

    # def destroy 
    #     @user = selected_user 
    #     if @user
    #         @user.destroy
    #         render :show
    #     else
    #         render ['Could not find user']
    #     end
    # end 

    private 

    def selected_user 
        User.find_by(id: params[:id])
    end 

    def user_params 
        params.require(:user).permit(:username, :password)
    end

end
