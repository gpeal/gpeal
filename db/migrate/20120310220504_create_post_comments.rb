class CreatePostComments < ActiveRecord::Migration
  def change
    create_table :post_comments do |t|
      t.string :author
      t.string :content

      t.timestamps
    end
  end
end
