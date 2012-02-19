class CreatePrizes < ActiveRecord::Migration
  def change
    create_table :prizes do |t|
      t.references :draw
      
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
