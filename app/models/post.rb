class Post < ActiveRecord::Base
	has_many :post_comments
end
