import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'], // Define aquí los reducers que deseas persistir en el Local Storage
};

export default persistConfig;
