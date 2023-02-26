import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { ListItem, List } from './ContactList.styled';
export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <List>
      {filterContacts().map(({ id, name, phone }) => (
        <ListItem key={id}>
          {name}: {phone}
          <button onClick={() => dispatch(deleteContact(id))} type="button">
            Delete
          </button>
        </ListItem>
      ))}
    </List>
  );
};
