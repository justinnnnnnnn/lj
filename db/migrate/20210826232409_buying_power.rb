class BuyingPower < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :account_balance
    add_column :users, :buying_power, :decimal, precision: 10, scale: 2
  end
end
