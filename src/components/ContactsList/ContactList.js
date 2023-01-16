export const ContactsList = ({ contacts, dele }) => (
  <ul>
    {contacts.map(({ id, name, number }) => {
      return (
        <li>
          <p>
            {name} :{number}
          </p>
          <button type="button">Delete</button>
        </li>
      );
    })}
  </ul>
);
