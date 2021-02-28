# THINGS TO FIX OR IMPROVE 
  * Dashboard - componentDidUnmount() lifecyle (maybe)
  * Take the methods that are being called on the client side, like text truncation and unit conversions, and put them on the backend
  * Create User Profile feature
  * Doesn't seem like it's properly logging out
  * Blog post button on the header

# Current_user is not working - 2/24/2021
  * I'm going to try and work around current_user, for the time being, to try and get the header to render the icons.
# Okay, I'm using userLogin to render the data. However, the current_user is not persisting on the backend. 
  * Article - "User Authentication in React via Rails API"
  * Globetrotter video

# For login Authentication - Enabling cookies
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

# 2/27/2021
 * Redux - Review
  - 'Single source of truth'
  - Redux stores all of the necessary data in our application in a Javascript object seperate from our components. 
  - This data is stored in one place and with some configuration ('mapTo' methods), we can read it as props in regular React components.
  - We update the data by sending an 'action', which is a set of strict instructions we create that Redux will use to update the data 
    * action = {
      type: 'ADD_INTEREST',
      newInterest: {
        name: 'hockey',
        type: 'sport'
      }
    }
    * In this 'action' example, we define a 'type' (what it will be doing), then we pass it a 'payload' (the data that will be added)
    * Any time we update the state in Redux, we must create an action first. This action is just a plain old Javascript object
    * This action objects, once connected, can be used by any other component to update the state
  - To change state, we need to create an action, that holds information (a Javascript object), that instructs the to update that state. The action combined with the previous state, produces an updated state.
  - All of Redux is just plain old Javascript, it is the pattern, the way the information flows, that makes Redux so useful








  