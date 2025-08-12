class CreatePhotoelectricEffects < ActiveRecord::Migration[7.1]
  def change
    create_table :photoelectric_effects do |t|
      t.float :frequency
      t.float :work_function
      t.float :energy
      t.boolean :emits

      t.timestamps
    end
  end
end
