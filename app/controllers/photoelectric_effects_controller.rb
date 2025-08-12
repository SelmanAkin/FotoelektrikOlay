class PhotoelectricEffectsController < ApplicationController
  def index
    @photoelectric_effects = PhotoelectricEffect.order(:frequency)
  end
  
  def new
    @photoelectric_effect = PhotoelectricEffect.new
  end

  def create
    @photoelectric_effect = PhotoelectricEffect.new(photoelectric_effect_params)

    if @photoelectric_effect.save
      msg = @photoelectric_effect.emits ? "Elektron koptu! ⚡" : "Elektron kopmadı. ❌"
      flash[:notice] = "#{msg} (Enerji: #{@photoelectric_effect.energy.round(2)} eV, Frekans: #{@photoelectric_effect.frequency} Hz)"
      redirect_to photoelectric_effects_path
    else
      flash.now[:alert] = "Veri kaydedilemedi. ❗ Lütfen tüm alanları doğru girin."
      render :new
    end
  end



  def destroy
    @photoelectric_effect = PhotoelectricEffect.find(params[:id])
    @photoelectric_effect.destroy

    flash[:notice] = "Kayıt silindi 🗑️"
    redirect_to photoelectric_effects_path
  end

  private

  def photoelectric_effect_params
    params.require(:photoelectric_effect).permit(:frequency, :work_function)
  end
end
