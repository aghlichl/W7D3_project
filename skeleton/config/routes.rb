Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
      resources :pokemon, only: [:create, :index, :show]
  end

  root to: 'static_pages#root'
end
