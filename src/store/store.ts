import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    //users: usersReducer,
    //events: eventsReducer,
    //settings: settingsReducer
  }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;