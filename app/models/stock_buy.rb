class StockBuy < ApplicationRecord
    validates :ticker, :shares, :owner_id, presence: true
  end
  