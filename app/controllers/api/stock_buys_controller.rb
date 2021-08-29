class Api::StockBuysController < ApplicationController

  def index
    @stock_buys = StockBuy.where(:owner_id => current_user.id).all
  end

  def show
    @stock_buy = StockBuy.where(:owner_id => current_user.id).find_by(ticker: params[:ticker])
  end
  
  def create
    @stock_buy = StockBuy.new(stock_buy_params)
    @stock_buy.owner_id = current_user.id
    @stock_buy.save!
  end
  
  def update
    @stock_buy = StockBuy.where(:owner_id => current_user.id).find_by(ticker: params[:ticker])
    @stock_buy.shares = params[:shares].to_i
    destroy(@stock_buy)
    @stock_buy.save!
  end

  def destroy(this_stock)
    if this_stock[:shares] == 0
      this_stock.delete
    end
  end


  private 

  def stock_buy_params 
    params.require(:stock_buy).permit(:ticker, :shares, :owner_id)
  end

end
  