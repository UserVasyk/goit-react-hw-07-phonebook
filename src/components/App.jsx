import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactFrom/ContactFrom';
import { Filter } from './Filter/Filter';
import { Title, Box, TitleContacts } from './App.styled';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch;

  return (
    <Box>
      <button type="button" onClick={() => dispatch(fetchContacts())}></button>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
    </Box>
  );
};
