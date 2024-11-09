import {
  StyledListItem,
  ListBtn,
  StyledTrashIcon,
} from './ContactsListItem.styled';

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

export default ContactsListItem;
