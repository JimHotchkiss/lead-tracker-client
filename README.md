# THINGS TO FIX OR IMPROVE 
  * Dashboard - componentDidUnmount() lifecyle (maybe)
  * Take the methods that are being called on the client side, like text truncation and unit conversions, and put them on the backend
  [] Create User Profile feature
  [X] Doesn't seem like it's properly logging out
  [] Blog post button on the header
  * May be more userful, in the leads table, to replace contact with lead status(?)


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
  - To change state, we need to create an action, that holds information (a Javascript object), that instructs to update that state. The action combined with the previous state, produces an updated state.
  - All of Redux is just plain old Javascript, it is the pattern, the way the information flows, that makes Redux so useful

# 2/28/2021
  * Redux - review continued
    - Pure functions 
    - Redux flow
    - State and actions are just Javascript object
      * let state = { count: 0}
      * let action = { type: 'INCREASE_COUNT' }
    - To update the state, we can simply write a function that takes in the previous state and the action, and based on the action type, update the state accordingly.
      * It is customary, however, instead of using 'if' and 'else if' statements, to use switch statements. 
        - function changeState(state, action) {
          switch (action.type) {
            case 'INCREASE_COUNT':
              return { count: state.count + 1 }
            default:
              return state;
          }
        }
      * Note - we always include a default that returns state. This way regardless of the switch statement, we will never return null or undefined
    - That is the Redux in a nut shell 
      * Action -> Function -> Update State
        - This function, however, has a name: Reducer
      * Action -> Reducer -> Update State
    - Reducers are pure functions 
      * Pure functions are only determined by their input values
      * Pure functions have no side effects. By this we mean pure functions do not have any effect outside of the function. They only return a value. 
        - Quick example (impure function):
          * let x = 5
            const add = fucntion(){
              x += 1 
              return x
            }
          * This function mutates x, and if we keep inputting 1, we'll keep getting a different output. 
        - Conversely (pure function)
          * const add = function(value){
            return value + 1
          }
          * This function, if we input 5, lets say, will ALWAYS return 6
      - Summary 
        * We hold our applications state in a plain Javascript object
        * To change our state, we create an action, which is a plain Javascript object with a key type.
        * And pass this action to a reducer function that uses switch statements.
        * Our reducer is a pure function, and does NOT mutate the current state, but rather creates a new state object. 
  * Note - spread operator example
    - let dog = {id: 1, name: 'scooby', color: 'brown', age: 4 }
    - let olderDog = {...dog, age: dog.age + 1}
      * This would read, 'Return a new object that contains all the key/value pairs from 'dog', and copied over with age key overwritten with a new value'
# 3/2/2021
  * Redux review - continued
    - Dispatch 
      * In our Redux flow, we Action --> Reducer --> Update State
        - We know our action is an object, which contains key/value pair of an action description and a payload.
        - However, how do we call the action
        - We create a function called Dispatch 
          * function dispatch(action) {
            state = changeState(stata, action)
            render()
          }
            - This dispatch() function takes in an action, calls for a change to the state, by calling the reducer, and passing to that reducer the state and the action to be preformed. Then we call the render() function that simply renders the changes to the DOM.
    - Dispatch - initial action
      *


# 2/28/2021
  [X] Add blog icon to header
  [X] Add this to router
      





  