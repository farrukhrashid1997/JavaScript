import {createStore, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './RootReducer';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
  //   blacklist: ['loading', 'error'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const rootStore = createStore(persistedReducer, applyMiddleware(thunk));

export const store = rootStore;

export const persist = callback => persistStore(rootStore, null, callback);
