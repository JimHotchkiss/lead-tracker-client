# Login fix - 2/23/21
  [] Find out where the login process is failing
    * The Login page is taking the user input, and passing it to the UserSubmit action
    * The UserSubmit is making a fetch request, and successfully returning the data from the api
    * Then the userSubmitSuccess is called, and is reached successfully
    * A type: USER_LOGIN is sent to the reducer
      # However, it never makes it to the reducer.
      # It wasn't making to the reducer, userSubmit, because userSubmit was not defined in the Store
      # !!!! The user is NOT remaining logged in. It's not keeping the sessions key.
        - Need to watch the Learn.co Globetrotter login video.
# Article - "User Authentication in React via Rails API"

# Current_user is not working - 2/24/2021
  * I'm going to try and work around current_user, for the time being, to try and get the header to render the icons.
# Okay, I'm using userLogin to render the data. However, the current_user is not persisting on the backend. 
  * Article - "User Authentication in React via Rails API"
  * Globetrotter video
# For login Authentication
  * config/application.rb 
    - config.middleware.use ActionDispatch::Cookies
      config.middleware.use ActionDispatch::Session::CookieStore, key: '_cookie_name'
  * config/intializers/cor.rb
    - Rails.application.config.middleware.insert_before 0, Rack::Cors do
        allow do
          origins 'http://localhost:3000'
          resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head],
          credentials: true
        end
      end
  * On the client side, in the fetch request 
    - credentials: "include"

# Redux flow -> Define it in Store -> define the action (this)
  