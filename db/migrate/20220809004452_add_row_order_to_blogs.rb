class AddRowOrderToBlogs < ActiveRecord::Migration[6.0]
  def change
    add_column :blogs, :row_order, :integer
  end
end
