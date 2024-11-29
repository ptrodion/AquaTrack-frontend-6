import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import userReducer from './auth/slice';
import waterReducer from './water/selector';
import userCountReducer from './userCount/userCountSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistedReducer = persistReducer(
  {
    key: 'user',
    storage,
    whitelist: ['token'],
  },
  userReducer
);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    water: waterReducer,
    userCount: userCountReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
