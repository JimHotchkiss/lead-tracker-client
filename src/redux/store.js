import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducers";
import currentUser from "./reducers/currentUser";
import leads from "./reducers/leadsReducer";
import contacts from "./reducers/contactsReducer";
const manageReducers = combineReducers({
  userInput: userReducer,
  currentUser: currentUser,
  leads: leads,
  contacts: contacts,
});

const store = createStore(
  manageReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
