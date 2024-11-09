import { Component } from 'react';
import shortid from 'shortid';
import { AppContainer } from './App.styled.js';
import ContactForm from 'components/ContactForm/index.js';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter/';
import initialContacts from '../../data/contacts.json';
import Notiflix from 'notiflix';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const isDuplicate = contacts.some(
      existingContact =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isDuplicate) {
      Notiflix.Notify.failure(`${contact.name} is already in contacts`);
      return;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
      Notiflix.Notify.success(
        `${contact.name} has been successfully added to your contact list`
      );
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <AppContainer>
        <ContactForm onSubmit={this.addContact} />
        <Filter filter={filter} filterValue={this.handleFilter} />
        <ContactsList
          contacts={filteredContacts}
          onContactDelete={this.deleteContact}
        />
      </AppContainer>
    );
  }
}

export default App;
