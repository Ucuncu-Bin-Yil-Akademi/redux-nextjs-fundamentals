import {createStore} from 'redux';
import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const CounterStore = createStore(persistedReducer);
const persistor = persistStore(CounterStore);

export {CounterStore, persistor}