import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Component } from 'react';
import { ContactForm } from '../ContactsForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    numbers: '',
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  addContact = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number }],
    }));
  };

  findContact = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
