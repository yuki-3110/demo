class AddDeadlineToBlogs < ActiveRecord::Migration[6.0]
  def change
    add_column :blogs, :deadline, :date
  end
end
