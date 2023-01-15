export const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ name, number }) => {
      return (
        <li>
          <p>
            {name} :{number}
          </p>
          <button type="button"></button>
        </li>
      );
    })}
  </ul>
);
