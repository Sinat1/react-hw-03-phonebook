import ContactsListItem from 'components/ContactsListItem';
import { ContactsListTitle, StyledContactsList } from './ContactsList.styled';

const ContactsList = ({ contacts, onContactDelete }) => {
  return (
    <>
      <ContactsListTitle>Contacts</ContactsListTitle>
      <StyledContactsList>
        <ContactsListItem
          contacts={contacts}
          onContactDelete={onContactDelete}
        />
      </StyledContactsList>
    </>
  );
};

export default ContactsList;
