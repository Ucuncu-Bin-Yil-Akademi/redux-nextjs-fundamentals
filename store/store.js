import {createStore} from 'redux';
import rootReducer from './reducers';

const CounterStore = createStore(rootReducer);

export {CounterStore}