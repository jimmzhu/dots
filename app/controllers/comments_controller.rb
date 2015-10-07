class CommentsController < ApplicationController

  def index
    @comments = Comment.order(created_at: :desc)
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @comments }
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.save
    render json: Comment.order(created_at: :desc)
  end


  private

  def comment_params
    params.require(:comment).permit :author, :text
  end

end
