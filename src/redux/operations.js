import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63f9b42fbeec322c57e67b09.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/', async () => {
  const response = await axios.get('/contacts');
  console.log('getting contacts');
  return response.data;
});
