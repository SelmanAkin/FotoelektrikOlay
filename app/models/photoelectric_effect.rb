class PhotoelectricEffect < ApplicationRecord
  validates :frequency, :work_function, presence: true, numericality: { greater_than: 0 }

  before_save :calculate_energy_and_emission

  private

  def calculate_energy_and_emission
    h_ev_s = 4.136e-15 # Planck sabiti (eV·s)
    self.energy = h_ev_s * frequency
    self.emits = energy > work_function
  end
end
