class Draw < ActiveRecord::Base
  belongs_to :prize
  belongs_to :participant
  
  

  
  validates_presence_of :name
  
  
end
