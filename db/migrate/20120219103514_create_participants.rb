class CreateParticipants < ActiveRecord::Migration
  def change
    create_table :participants do |t|
      t.references :draw
      t.string :name
      

      t.timestamps
    end
  end
end
