import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import chatReducer from "./chat-reducer";

const reduser = combineReducers({
	message: chatReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reduser, composeEnhancers(applyMiddleware()));

export default store;