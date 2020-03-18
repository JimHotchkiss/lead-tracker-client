import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import newUserReducer from "./reducers/newUserFormData";
import newUserSubmit from "./reducers/newUserSubmit";
import userLogout from "./reducers/userLogout";

const manageReducers = combineReducers({
  currentUser: newUserSubmit,
  userLogout: userLogout,
  currentInput: newUserReducer
});

const store = createStore(
  manageReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
