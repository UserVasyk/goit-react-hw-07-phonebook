import axios from 'axios';
import { nanoid } from 'nanoid';
axios.defaults.baseURL = 'https://63f9b42fbeec322c57e67b09.mockapi.io/contacts';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  console.log('getting contacts');
  return data;
}
export async function addContact({ name, number }) {
  const { data } = await axios.post('/contacts', {
    createdAt: new Date(),
    name,
    phone: number,
    id: nanoid(),
  });
  console.log('adding contact');
  return data;
}
export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  console.log('deleting contact');
  return data;
}
