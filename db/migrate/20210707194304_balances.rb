class Balances < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :account_balance
    add_column :users, :account_balance, :decimal, precision: 10, scale: 2
  end
end
