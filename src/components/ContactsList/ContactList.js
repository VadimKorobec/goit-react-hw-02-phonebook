import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, idx) => (
        <li key={idx}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};
