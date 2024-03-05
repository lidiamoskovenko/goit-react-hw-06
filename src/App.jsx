import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchForm from './components/SearchForm/SearchForm';

export default function App() {
  return (
    <div >
     
        <h1>Phonebook</h1>
      <ContactForm />
      <SearchForm />
      <ContactList />
   
      
    </div>
  );
}