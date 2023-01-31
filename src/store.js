import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//reducer
const reducers = combineReducers({

})

//Middleware
const Middleware = [thunk]

//create store
const store = createStore(reducers, ...Middleware)



export default store;