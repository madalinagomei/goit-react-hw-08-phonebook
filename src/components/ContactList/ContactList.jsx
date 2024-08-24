import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectVisibleContacts,
} from '../../redux/contacts/selector';
import { deleteContact } from '../../redux/contacts/operations';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();

  const contactsList = useSelector(selectVisibleContacts);
  const { items, isLoading, error } = useSelector(selectContacts);

  return isLoading && !error ? (
    <Loader padding={5} size="md" /> //props to set the size of the spinner and the vertical padding of the container
  ) : (
    <ul className={css.list}>
      {items &&
        contactsList.map(contact => {
          const { id, name, number } = contact;
          return (
            <li className={css.item} key={id}>
              <p>
                {name}: {number}
              </p>

              <button
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
