class HomeController < ApplicationController

	def index
		@posts = Post.all
		@post_comment = PostComment.new
		respond_to do |format|
			format.html
		end
	end

end
