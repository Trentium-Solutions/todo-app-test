import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'tasks',
  whitelist: ['tasks', 'theme'],
  storage,
}
// creates and configures the store based on the parameters passed
//redux persist stores values in key/ value pairs
const persistedReducer = persistReducer(persistConfig, reducers)
export const store = createStore(persistedReducer, {}, applyMiddleware(thunk))
export const persistore = persistStore(store)
