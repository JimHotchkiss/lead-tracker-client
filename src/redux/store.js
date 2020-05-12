import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducers";
import userSubmit from "./reducers/userSubmit";
import currentUser from "./reducers/currentUser";
const manageReducers = combineReducers({
  userInput: userReducer,
  user: userSubmit,
  currentUser: currentUser,
});

const store = createStore(
  manageReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
