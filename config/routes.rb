Rails.application.routes.draw do
  # get 'comments/create'
  # get 'homes/index'
  # get 'users/show'
  # mount RailsAdmin::Engine => '/]', as: 'rails_admin'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root 'homes#index'
  # root 'users#show'
  # root 'blogs#index'
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  # 以下を追加
  devise_scope :user do
    post 'users/guest_sign_in', to: 'users/sessions#guest_sign_in'
    post 'users/admin_guest_sign_in', to: 'users/sessions#admin_guest_sign_in'
  end

  resources :homes, only: %i( index )

  resources :users, only: %i( show )

  resources :blogs do
    resources :comments
    put :sort
  end




  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end

end
