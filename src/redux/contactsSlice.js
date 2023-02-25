import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operations';
const contactsInitial = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // addContact({ items }, action) {
    //   items.push(action.payload);
    // },
    deleteContact({ items }, action) {
      const index = items.findIndex(task => task.id === action.payload);
      items.splice(index, 1);
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.fulfilled]({ items }, action) {
      items.push(action.payload);
    },
  },
});

export const { deleteContact } = contactsSlice.actions;
