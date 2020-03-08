import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

const newUserReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_USER":
      return action.newUser;
    default:
      return state;
  }
};

const manageReducers = combineReducers({
  newUser: newUserReducer
  // I can add more reducers as needed
});

const store = createStore(
  manageReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
