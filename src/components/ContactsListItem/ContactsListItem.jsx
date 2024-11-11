import {
  StyledListItem,
  ListBtn,
  StyledTrashIcon,
} from './ContactsListItem.styled';
import PropTypes from 'prop-types';

const ContactsListItem = ({ contacts, onContactDelete }) => {
  return (
    <>
      {contacts.map(contact => (
        <StyledListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ListBtn type="button" onClick={() => onContactDelete(contact.id)}>
            <StyledTrashIcon
              width="20"
              height="20"
              aria-label="Delete button"
            />
          </ListBtn>
        </StyledListItem>
      ))}
    </>
  );
};

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onContactDelete: PropTypes.func.isRequired,
};

export default ContactsListItem;
