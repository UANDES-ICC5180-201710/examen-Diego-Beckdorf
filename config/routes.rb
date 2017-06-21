Rails.application.routes.draw do
  resources :games
  resources :purchases
  devise_for :users
  root to: 'games#index'
  resources :users do
    get 'toggle_staff', on: :member
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
