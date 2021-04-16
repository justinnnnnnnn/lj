class CreateStonks < ActiveRecord::Migration[5.2]
  def change
    create_table :stonks do |t|
      t.string :name, null: false
      t.string :symbol, null: false
      t.integer :user_id
      t.timestamps
    end
    add_index :stonks, :symbol, unique: true
    add_index :stonks, :name, unique: true
    add_index :stonks, :user_id
  end
end
