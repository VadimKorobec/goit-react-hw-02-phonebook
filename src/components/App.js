import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </form>

        <button type="submit">Add contact</button>
      </div>
    );
  }
}
