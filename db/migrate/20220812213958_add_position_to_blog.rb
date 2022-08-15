class AddPositionToBlog < ActiveRecord::Migration[6.0]
  def change
    add_column :blogs, :position, :integer
  end
end
