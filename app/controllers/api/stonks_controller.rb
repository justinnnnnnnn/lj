class Api::StonksController < ApplicationController
  def index
    @stonk = Stonk.find_by(symbol: params[:symbol]) || Stonk.find_by(name: params[:name])

    if @stonk
      render "api/stonks/show"
    else
      render json: @stonk.errors.full_messages, status: 404 
    end
  end
end
