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