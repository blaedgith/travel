class AddCoordinatesToDestinations < ActiveRecord::Migration
  def change
    add_column :destinations, :latitude, :float
    add_column :destinations, :longituted, :float
    add_column :destinations, :address, :string
  end
end
