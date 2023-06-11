import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistConfig from './persistConfig';
import { contactReducer } from './addContacts/addContacts';
import persistReducer from 'redux-persist/es/persistReducer';

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactReducer),
   
  },
});

export const persistor = persistStore(store);


