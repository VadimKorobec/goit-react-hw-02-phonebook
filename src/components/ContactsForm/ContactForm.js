// export const ContactForm = ({}) {
//   // state = {
//   //   name: '',
//   //   number: '',
//   // };

//   // handleChange = event => {
//   //   const { name, value } = event.currentTarget;

//   //   this.setState({ [name]: value });
//   // };

//   // handleSubmit = event => {
//   //   event.preventDefault();

//   //   this.props.onSubmit(this.state);
//   //   this.reset();
//   // };

//   // reset = () => {
//   //   this.setState({ name: '', number: '' });
//   // };

//   // render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           value={this.state.name}
//           onChange={this.handleChange}
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//         <label htmlFor="number">Number</label>
//         <input
//           type="tel"
//           value={this.state.number}
//           onChange={this.handleChange}
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         <button type="submit" disabled={(!this.state.name, !this.state.number)}>
//           Add contact
//         </button>
//       </form>
//     );
//   // }
// }:

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.currentTarget.elements;
    onSubmit(name.value, number.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button>Add contact</button>
    </form>
  );
};
