import { configureStore } from '@reduxjs/toolkit';
import {userReducer} from './features/User/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer
  },
});

export default store;


// // src/app/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist'
//   import {userReducer} from './features/User/userReducer';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, userReducer);

// const store = configureStore({
//     reducer: {
//         user: persistedReducer
//     },
//   middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });
// const persistor = persistStore(store);

// export { store, persistor };
