class Api::StockBuysController < ApplicationController

  def show
    @stock_buy = StockBuy.find_by(ticker: params[:ticker])
  end
  
  def create
    @stock_buy = StockBuy.new(stock_buy_params)
    @stock_buy.owner_id = current_user.id
    @stock_buy.save!
  end
  
  def update
    # @stock_buy = stock_buy.find_by(id: params[:id])
    @stock_buy = stock_buy.find_by(ticker: params[:ticker])
    if @stock_buy && @stock_buy.owner_id == current_user.id
      @stock_buy.shares = params[:shares].to_i
      @stock_buy.save!
    end
  end

  private 

  def stock_buy_params 
    params.require(:stock_buy).permit(:ticker, :shares, :owner_id)
  end

end
  