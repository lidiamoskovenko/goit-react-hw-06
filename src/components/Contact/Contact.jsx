import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from './Contact.module.css'

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
     <li key={id} className={css.contactListItem}>
          <p>{name}</p>
           <p>{number}</p>

      <button type="button" onClick={handleDeleteContact} className={css.contactBtn}>
        Delete
      </button>
    </li>
  );
}