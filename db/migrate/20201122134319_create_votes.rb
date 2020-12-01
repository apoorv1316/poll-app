class CreateVotes < ActiveRecord::Migration[6.0]
  def change
    create_table :votes do |t|
      t.integer :option1, default: 0
      t.integer :option2, default: 0
      t.integer :option3, default: 0
      t.integer :option4, default: 0
      t.references :user, null: false, foreign_key: true
      t.references :poll, null: false, foreign_key: true

      t.timestamps
    end
  end
end
