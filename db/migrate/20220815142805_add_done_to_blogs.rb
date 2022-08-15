class AddDoneToBlogs < ActiveRecord::Migration[6.0]
  def change
    add_column :blogs, :done, :boolean, default: false
  end
end
