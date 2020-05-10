import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
const manageReducers = combineReducers({});

const store = createStore(
  manageReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
