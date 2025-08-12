Rails.application.routes.draw do
 
  resources :photoelectric_effects, only: [:new, :create, :index, :destroy]
  root "photoelectric_effects#new"
 
end
