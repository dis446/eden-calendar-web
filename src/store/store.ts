import {configureStore} from '@reduxjs/toolkit';
import userSlice from '../reducer/userReducer';

const store = configureStore({
  reducer: {
    users: userSlice
    //events: eventsReducer,
    //settings: settingsReducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;