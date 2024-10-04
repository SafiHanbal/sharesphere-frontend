import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'chat'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  import.meta.env.VITE_NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => middleWares,
});

export const persistor = persistStore(store);
