import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

const newUserReducer = (
  state = { username: "", email: "", password: "" },
  action
) => {
  switch (action.type) {
    case "CREATE_USER":
      return action.newUser;
    default:
      return state;
  }
};

const manageReducers = combineReducers({
  newUser: newUserReducer
});

const store = createStore(
  manageReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
