import { createStore, combineReducers, applyMiddleware } from 'redux';
import ThunkMiddleWare from 'redux-thunk';
import weatherReducer from './weatherReducer';

let reducers = combineReducers({
    weather: weatherReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleWare));

export default store;