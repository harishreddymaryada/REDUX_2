 import {createStore,combineReducers,applyMiddleware} from 'redux'
 import reducer1 from './reducers/reducer1'
 import promise from 'redux-promise-middleware'

export default createStore(combineReducers({reducer1},{},applyMiddleware(promise())));
