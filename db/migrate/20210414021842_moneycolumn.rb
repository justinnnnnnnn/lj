class Moneycolumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :accountBalance, :float
  end
end
