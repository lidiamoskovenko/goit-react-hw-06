import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filters);

  const filteredContacts = contacts.filter((contact) => {
    if (contact && contact.name) {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    } else {
      return false;
    }
  });

  return (
    <div >
      {filteredContacts.length > 0 ?(<ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>) : <p>No contacts found</p> }
      
    </div>
  );
};

export default ContactList;