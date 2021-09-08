class Api::StockBuysController < ApplicationController

  def index
    @stock_buys = StockBuy.where(:owner_id => current_user.id).all
    if @stock_buys
      @stock_buys
    else
      create_bogus
      index
    end
  end

  def show
    @stock_buy = StockBuy.where(:owner_id => current_user.id).find_by(ticker: params[:ticker])
    if @stock_buy
      @stock_buy
    end
  end

  
  def create
    @stock_buy = StockBuy.new(stock_buy_params)
    @stock_buy.owner_id = current_user.id
    @stock_buy.save!
    destroy(@stock_buy)
  end

  # def create_bogus
  #   @stock_buy = StockBuy.new(stock_buy_params_fake)
  #   @stock_buy.owner_id = current_user.id
  #   @stock_buy.save!
  # end
  
  def update
    @stock_buy = StockBuy.where(:owner_id => current_user.id).find_by(ticker: params[:ticker])
    @stock_buy.shares = params[:shares].to_i
    @stock_buy.save!
    destroy(@stock_buy)
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
  # def stock_buy_params_fake
  #   defaults = {:ticker, :shares => 0, :owner_id => current_user.id }
  #   params.require(:stock_buy).permit(:ticker, :shares, :owner_id).reverse_merge(defaults)
  # end

end
  