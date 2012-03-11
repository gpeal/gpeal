class HomeController < ApplicationController

	def index
		@posts = Post.find(:all, :order => :"created_at DESC")
		@post_comment = PostComment.new
		respond_to do |format|
			format.html
		end
	end

end
