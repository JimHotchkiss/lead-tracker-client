import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import thunk from "redux-thunk"
import userInput from "./reducers/userReducers"
import currentUser from "./reducers/currentUser"
import leads from "./reducers/leadsReducer"
import contacts from "./reducers/contactsReducer"
import leadInput from "./reducers/leadFormReducer"
import lead from "./reducers/leadSubmitReducer"
import showLead from "./reducers/showLeadReducer"
import createUserInput from "./reducers/createUserReducer"
import createUser from "./reducers/createUserReducer"
import showLeadContact from "./reducers/showLeadContactReducer"
import showContact from "./reducers/showContactReducer"
// User login
import userLogin from "./reducers/userLogin"

const manageReducers = combineReducers({
  // User Login
  userLogin: userLogin,
  userInput: userInput,
  createUserInput: createUserInput,
  currentUser: currentUser,
  createUser: createUser,
  leads: leads,
  contacts: contacts,
  leadInput: leadInput,
  lead: lead,
  showLead: showLead,
  showLeadContact: showLeadContact,
  showContact: showContact,
})

const store = createStore(
  manageReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
export default store
