import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactInfo, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.addContact(contactInfo);
      return contacts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.deleteContact(contactId);
      return response;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
