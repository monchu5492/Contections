Rails.application.routes.draw do
  resources :join_events
  resources :events
  resources :users
      post '/auth', to: 'auth#create'
      get '/current_user', to: 'auth#show'
      # post '/attend_event', to: 'users#attendEvent'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
