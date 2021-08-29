class StockBuy < ApplicationRecord
  validates :ticker, :shares, :owner_id, presence: true

  # attr_writer :shares

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User      
end
  