import PropTypes from 'prop-types';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div key={id}>
      <p>
        {name} :{number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
