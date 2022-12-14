class BlogsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_blog, only: %i[ show edit update destroy ]

  # GET /blogs or /blogs.json
  def index
    # @blogs = Blog.all
    # @blogs = Blog.all.order(standard_deadline: "ASC").order(id: "ASC")
    @blogs = current_user.blogs.order(standard_deadline: "ASC").order(id: "ASC")
    @blogs_hash = @blogs.group_by {|blog| blog.standard_deadline}

    @today = Date.today
    @deadline_today = Date.today
    # @blogs = Blog.rank(:row_order)
  end

  # GET /blogs/1 or /blogs/1.json
  def show
    @comments = @blog.comments
    @comment = @blog.comments.build
  end

  # GET /blogs/new
  def new
    @blog = Blog.new
  end

  # GET /blogs/1/edit
  def edit
  end

  # POST /blogs or /blogs.json
  def create
    # @blog = Blog.new(blog_params)
    
    respond_to do |format|
      @blog = current_user.blogs.build(blog_params)
      if @blog.save
        format.html { redirect_to blog_url(@blog), notice: "Blog was successfully created." }
        format.json { render :show, status: :created, location: @blog }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @blog.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blogs/1 or /blogs/1.json
  def update
    respond_to do |format|
      if @blog.update(blog_params)
        format.html { redirect_to blog_url(@blog), notice: "Blog was successfully updated." }
        format.json { render :show, status: :ok, location: @blog }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @blog.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blogs/1 or /blogs/1.json
  def destroy
    @blog.destroy

    respond_to do |format|
      format.html { redirect_to blogs_url, notice: "Blog was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  # this action will be called via ajax
  # def sort
  #   blog = Blog.find(params[:blog_id])
  #   blog.update(blog_params)
  #   render body: nil
  #   # render nothing: true
  # end

  def toggle
    # render nothing: true
    head :no_content
    @blog = Blog.find(params[:id])
    @blog.done = !@blog.done
    @blog.save
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog
      @blog = Blog.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def blog_params
      # params.require(:blog).permit(:title, :content, :row_order_position)
      params.require(:blog).permit(:title, :content, :deadline, :standard_deadline, :done, :user_id)
    end
end
