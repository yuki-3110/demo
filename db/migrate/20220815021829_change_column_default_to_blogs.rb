class ChangeColumnDefaultToBlogs < ActiveRecord::Migration[6.0]
  def change
    change_column_default :blogs, :standard_deadline, from: nil, to: "0"
  end
end
