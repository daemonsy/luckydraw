class RemoveReferenceParticipant < ActiveRecord::Migration
  def self.up
    remove_column :participants, :draw_id
  end

  def self.down
    add_column :participants, :draw_id, :integer
  end
end
