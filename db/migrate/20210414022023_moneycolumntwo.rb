class Moneycolumntwo < ActiveRecord::Migration[5.2]
  def change
        rename_column :users, :accountBalance, :account_balance
  end
end
