class Participant < ActiveRecord::Base
  has_one :draw
  
  validates_presence_of :name
  
end
