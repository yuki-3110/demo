class Blog < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :user

  enum standard_deadline: {'1か月前まで': 1, '14日前まで': 2, '10日前まで': 3, '1週間前まで': 4, '前日まで': 5, '当日': 6, '1週間後まで': 7, '2週間後まで': 8, '1か月後まで': 9}
  # acts_as_list
  # include RankedModel
  # ranks :row_order
end
