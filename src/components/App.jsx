import { ContactForm } from './Form/ContactForm';
import { ContactList } from './ContactList';
import { FilterContacts } from './FilterContacts';

export const App = () => {
  return (
    <div className="container bg-dark text-light col-12">
      <div className="d-flex flex-row flex-wrap justify-content-start m-3">
        <div className="d-flex flex-row align-items-center">
          <h1 className="m-3 display-4">Phonebook </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-person-lines-fill mt-3 badge bg-warning"
            viewBox="0 0 16 16"
          >
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
          </svg>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-start gap-5">
        <div>
          <ContactForm />
        </div>
        <div>
          <FilterContacts />
        </div>
      </div>
      <div>
        <h2 className="fs-1 mt-5">Contacts</h2>
        <ContactList />
      </div>
    </div>
  );
};
