class AddFieldsToDraw < ActiveRecord::Migration
  def self.up
    add_column :draws, :participant_id, :integer
    add_column :draws, :prize_id, :integer
  end

  def self.down
    remove_column :draws, :prize_id
    remove_column :draws, :participant_id
  end
end