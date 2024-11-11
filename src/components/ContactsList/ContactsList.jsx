import ContactsListItem from 'components/ContactsListItem';
import { ContactsListTitle, StyledContactsList } from './ContactsList.styled';
import PropTypes from 'prop-types';

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

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onContactDelete: PropTypes.func.isRequired,
};

export default ContactsList;
