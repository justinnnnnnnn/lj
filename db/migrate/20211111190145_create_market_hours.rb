class CreateMarketHours < ActiveRecord::Migration[5.2]
  def change
    create_table :market_hours do |t|

      t.timestamps
    end
  end
end
