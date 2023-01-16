import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact, idx) => (
        <li key={idx}>
          <ContactItem contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
