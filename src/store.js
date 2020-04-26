import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import newUserReducer from "./reducers/newUserFormData";
import newUserSubmit from "./reducers/newUserSubmit";
import showLeadReducer from "./reducers/showLeadReducer";
const manageReducers = combineReducers({
  currentUser: newUserSubmit,
  userInput: newUserReducer,
  showLeadDetails: showLeadReducer,
});

const store = createStore(
  manageReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
