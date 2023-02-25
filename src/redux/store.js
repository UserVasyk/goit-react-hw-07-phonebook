import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from 'redux/filterSlice';
import { reducerSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: reducerSlice,
    filter: filterSlice.reducer,
  },
});
