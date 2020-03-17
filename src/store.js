import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import newUserReducer from "./reducers/newUserFormData";
import clearInput from "./reducers/clearInput";

const manageReducers = combineReducers({
  currentUser: newUserReducer,
  currentInput: clearInput
});

const store = createStore(
  manageReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
