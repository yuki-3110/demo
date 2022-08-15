class RemoveRowOrderFromBlogs < ActiveRecord::Migration[6.0]
  def change
    remove_column :blogs, :row_order, :integer
  end
end
