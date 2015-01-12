Rails.application.routes.draw do
  get "/articles", to: "articles#index", as: "articles"
  get '/articles/:article_url', to: 'articles#show', as: "article", article_url: /(.*)/
end
