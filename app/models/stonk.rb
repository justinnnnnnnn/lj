# == Schema Information
#
# Table name: stonks
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  symbol     :string           not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Stonk < ApplicationRecord

  validates :name, :symbol, uniqueness: true, presence: true
  
  has_many :stock_buys
end
