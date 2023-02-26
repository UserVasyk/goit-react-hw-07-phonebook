import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoading, getError } from 'redux/selectors';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactFrom/ContactFrom';
import { Filter } from '../Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Title, Box, TitleContacts } from './App.styled';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box>
      {isLoading && error === null && <Loader />}
      {error !== null && alert(error)}
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
    </Box>
  );
};
