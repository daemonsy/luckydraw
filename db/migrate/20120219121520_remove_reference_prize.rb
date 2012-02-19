class RemoveReferencePrize < ActiveRecord::Migration
  def self.up
    remove_column :prizes, :draw_id
  end

  def self.down
    add_column :prizes, :draw_id, :integer
  end
end
