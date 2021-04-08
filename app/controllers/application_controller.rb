class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
    before_action :require_logged_in, only: [:logout]
    helper_method :logged_in?, :current_user
    def current_user 
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 

    def require_logged_in 
      render json: { base: ['invalid cred'] }, status: 401  unless current_user
    end 

    def login(user)
        @current_user = user 
        session[:session_token] = user.reset_session_token! 
    end 

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil 
        @current_user = nil 
    end 

    def logged_in? 
        !!current_user
    end 


end
