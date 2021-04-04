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
    - Yes. The app, leveragn the virtual DOM, doesn't need to reload. It can update the DOM without rerendering the entire DOM.
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
        * dispatch() - For changing state via actions
        * subsribe() - For responding to state changes.
    - The createStore takes in a reducer. Usually, however, we have many reducers to manage the state of our app. So we use the redux provided method, combineReducers()
        * comgineReducers() takes in an object of key/value pairs. Each key/value representing a reducer and its represented state.
        * This is kept in a variable, and this single variable is passed into our createStore()
    - Additionally, in order to properly handle async request, we need to use a middleware called Thunk. 

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
* When we use the Link component, are we triggering a page refresh?
* What is an action creator? 
* What is an action?
* What would happen if you call an action creator on it’s own rather than as a prop (i.e. addList(listObj) vs. this.props.addList(listObj))? Why is the behavior different?
