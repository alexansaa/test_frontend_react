import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './message/messageSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
