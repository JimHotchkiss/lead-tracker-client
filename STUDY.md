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

# 3/4/2021
  [] Moved Login.js to container - maintained state
  [] Moved EditForm.js to container 
1. Upon page load, ReactDOM.render(element, container, [, callback])
    * In our case, the element is the App component
    * our 'container' is the index.html 'root'
# Note: In the userAsyncActions/getCurrentUser, it loops through a couple of times.
    * is  this because of the if-statement?
# Thunk - Handles asynchronise calls when working with Redux.
    * Promise - Is an object that represents some value that will be available later. We can access this data when the promise 'resolves'' and becomes available by chaining a .then() function onto our fetch() call.
# Thunk allows us to return a function inside of our action creator.
    * Normally, our action creator returns a plain Javascript object
    * That function returns the store's dispatch function as its argument. With that, we can dispatch multiple actions from inside that returned function 

# Study Topic 
* What is the difference between state and props? When do we use one over the other?
    - Props: 'Props' stands for 'property', and is used within React to pass data, including functions, from component to component
    - State: Is a built-in object that allows data to be persisted. State is specific to a component and may change over time. State, unlike props, cannot be passed from component to component. You can, however, define a property of a component and have the value equal the state.
* What is the difference between functional and class components? When should you use which?
    - Functional component: Is just a plain Javascript function that returns JSX.
    - Class component: Is a Javascript class that extends React.Component, which has a render() method.
        * It seems to me, with React.Component, you get more functionality, at least until Hooks came along. When we define a class within React, using extend React.Component, we get lifecycles that allow us to control the flow of our app.
            - constructor()
                * Is used to initialize state and bind methods
                    - With ES.next, we nolonger need the constructor() and we can directly define our state with state = {some: state}
            - render()
            - componentDidMount()
            - componentDidUpdate()
            - componentWillUnmount()
        * It also allows us to establish state, by using setState()
* Why do we use setState instead of just reassigning the state value? Why is setState async?
    - We use setState because you never want to directly mutate the state, like this.state.attribute = 'new attribute', but rather setState creates a new instance of the state.
    - setState is asynchronous because it alters state and causes a rerender
* What is the virtual DOM?
    - The DOM is the document object model. This is what paints the UI. When we make change some state of the UI the DOM is rerendered to reflect these changes. The virtual DOM is a virtual representation of the DOM. When there are changes to the state of UI, it is captured on the virtual DOM. Then through a processing called 'diffin', the virtual DOM is compared to the actual DOM, and the DOM is updated to reflect these changes. However, instead of rerendering the entire DOM, only the part, and impacted parts, of the DOM are rerendered. 
* Is your application a SPA?
    - Yes. The app, leverages the virtual DOM, doesn't need to reload. It can update the DOM without rerendering the entire DOM.
* What is the difference between client-side and server-side routing? Is there any connection between the two?
    - Client-side routing, as the name suggests, handles the routing on the client-side.
        * When a user clicks on a link, the URL changes but the request to the server is prevented
            - This change to the URL causes a state change and triggers a reaction, like rendering a new component or page.
            - This does NOT cause the entire page to rerender just the impacted components.
    - Server-side is managed on the server-side, or backend, and consequently, needs to keep making requests to the backend.
        * This call to the backend causes an entire page reload.
* How does client-side routing work? What components do we use from the react router library to set up client-side routing?
    - 
* What is Redux? Why would we use it?
* How do we set up redux? What components/functions do we use from the redux library?
    - From 'react-redux', we import Provider.
        * Provider wraps our entire app, App.js, and passes as a property the store. This allows the rest of the app's components access to the store. 
    - Then from, 'redux' we import 'createStore'
        * The store is a centralized object that all of our components have access to.
        * getState() - For accessing state
        * dispatch() - Is a function that takes in as its parameter an action (which is just a Javascript object)
        * subsribe() - For responding to state changes.
    - The createStore takes in a reducer. Usually, however, we have many reducers to manage the state of our app. So we use the redux provided method, combineReducers()
        * comgineReducers() takes in an object of key/value pairs. Each key/value representing a reducer and its represented state.
        * This is kept in a variable, and this single variable is passed into our createStore()
    - Additionally, in order to properly handle async request, we need to use a middleware called Thunk. 
# Redux Flow 
    * Click submit button which triggers onSubmit event handler
    * The event handler calls this.props.addList(list) which is invoking our action creator
    * The returned action object is then passed as an argument to the dispatch method - this happens behind the scenes since connect recognized that we passed an object as the second argument
    * The dispatch method then invokes our reducer and passes along the action object as an argument
    * The reducer then returns a NEW version of our state which triggers any component that receives our redux state as props to re-render
# Dispatch - Is a function that takes in as its parameter an action.
# Action - An action is an object that has a type
# Reducer - Is a function that sends an object (action) to the store that runs through more functions (cases) that figure out how the state will change.

* How do we give components access to the redux store?
    - Wrapping the root component, in this case App.js, with the Redux provided Provider component
* What is redux thunk middleware? When and why would we need it?
* What is the flow of your application? In what order do things happen? 
    - 
* What is the difference between passing mapDispatchToProps vs. passing an object? How does connect handle these differently?
* What is the difference between mapStateToProps and mapDispatchToProps? 
* What do we need in our application to enable components to access the redux store?
* What triggers a component to re-render?
    - Change in the state
* Does a re-render of a class component mean a NEW component object is created? Hint: does the constructor get invoked again on a re-render?
* What are the common lifecycle methods? In what order do lifecycle methods get invoked? 
* When does componentDidMount get executed?
    - When a component is being mounted for the first time, before the render() lifecycle method after the constructor() lifecycle method
* Can we send data from a child component to a parent component?
    - No. Data is oneway: from parent to child
* What do the terms container and presentational mean? Are these actually types of components?
    - Not formally. The represent a convention to seperate responsabilites. 
        * Containers handle the 'thinking'. So like data manipulation and overall functionality
        * Presentational components simple render JSX
* What is a reducer?
    - A reducer is what 'talks' to our store to update the state
* How do we update the redux store?
    - By passing an action to the reducer
* When/why would we pass a function to setState rather than an object?
    - this.state and this.props are asynchronous. Consequently, the app could be out of step.
    - Passing in a function into setState instead of an object will give you a reliable value for your component’s state and props.
    - class Example extends React.Component{
                state = {
                    no: 0
                    }
                    componentDidMount(){
                        this.incrementNo();
                        this.incrementNo();
                        this.incrementNo();
                    }
                    incrementNo(){
                        this.setState({
                        no: this.state.no + 1
                        })
                    }
                    render(){
                        return <div>Value of no: this.state.no</div>;
                    }
                }
                * Because this.state does not always reflect the most current state, after this componentDidMount() finishes running its three methods, our return value is 1
        - incrementNo(){
            this.setState((prevState)=>({
                no: prevState.no + 1
                }))
            }
                * By running running a function in setState, we can use the prevState, assuring we are always update the most current state.
* What is an action creator? 
    - Is is a function that returns an action
* What is an action?
    - Is a plain Javascript object that has a type and a payload. Basically it's telling us what part of the state to update (type: "INCREASE_COUNT", for example), and what to update the state with (payload: 2, for example)
* What would happen if you call an action creator on it’s own rather than as a prop (i.e. addList(listObj) vs. this.props.addList(listObj))? Why is the behavior different?
