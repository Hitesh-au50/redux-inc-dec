import CombineReducer from '../CombineReducer/CombineReducer'
import {createStore} from 'redux'
import { Increment , Decrement } from "../Action/Action";
//Store

const store = createStore(CombineReducer);

store.subscribe(()=>console.log(store.getState()))

store.dispatch(Increment())
store.dispatch(Decrement())
store.dispatch(Increment())
store.dispatch(Decrement())
store.dispatch(Increment())
store.dispatch(Decrement())

export default store