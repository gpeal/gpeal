class PostCommentsController < ApplicationController

	def create
		@post_comment = PostComment.create!(params[:post_comment])
		respond_to do |format|
			format.js
		end

	end

end
