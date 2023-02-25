import axios from 'axios';

axios.defaults.baseURL = 'https://63f9b42fbeec322c57e67b09.mockapi.io/contacts';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  console.log('getting contacts');
  return data;
}
export async function addContact({ name, number }) {
  console.log('number: ', number);
  console.log('gg: ', name);
  const { data } = await axios.post('/contacts', {
    createdAt: '123456432324565432',
    name: 'VASYL!!!!!!!!!!!!!!!',
    phone: '1-947-522-1101',
    id: '5',
  });
  console.log('adding contact');
  return data;
}
