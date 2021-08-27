class CreatePortfolio < ActiveRecord::Migration[5.2]
  def change
    create_table :stock_buys do |t|
      t.string :ticker, null: false
      t.integer :shares, null: false, default: 0
      t.integer :owner_id, null: false
      t.decimal :price, precision: 7, scale: 2
      t.timestamps
    end
  end
end
