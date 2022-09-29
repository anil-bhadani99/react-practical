import { configureStore } from '@reduxjs/toolkit';

import { authRootReducer, modalRootReducer } from './reducer';

// create root reducer
const rootReducer = {
  auth: authRootReducer,
  modal: modalRootReducer
};

// setup store
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.REACT_APP_ENV_STATUS !== 'production'
});

export default store;
