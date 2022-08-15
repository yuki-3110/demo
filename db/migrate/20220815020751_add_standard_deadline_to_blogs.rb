class AddStandardDeadlineToBlogs < ActiveRecord::Migration[6.0]
  def change
    add_column :blogs, :standard_deadline, :integer, null: false
  end
end
