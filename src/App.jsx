import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchForm from './components/SearchForm';

export default function App() {
  return (
    <div>
     
        <h1>Phonebook</h1>
      <ContactForm />
      <SearchForm />
      <ContactList />
   
      
    </div>
  );
}