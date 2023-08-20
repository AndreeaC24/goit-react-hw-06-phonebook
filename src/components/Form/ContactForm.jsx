import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import Notiflix from 'notiflix';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch(); //  allows you to send an action
  const contacts = useSelector(getContacts); // contacts from the state

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const contactName = form.elements.name.value;
    const contactNumber = form.elements.number.value;

    const isDuplicate = contacts.find(
      ({ name }) => name.toLowerCase() === contactName.toLowerCase()
    );

    if (isDuplicate) {
      Notiflix.Notify.warning(`${contactName} is already in contacts.`);
    } else { 
      dispatch(addContact(contactName, contactNumber));
    }
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className="d-flex flex-column flex-lg-row justify-content-start align-items-center gap-5 mx-2">
        <label className="me-2">
          <div className="form-group input-group">
            <div className="input-group-text bg-warning border border-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                className="bi bi-person-circle mx-3"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
              <input
                placeholder="Name"
                className="form-control"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </div>
          </div>
        </label>
        <label className="me-2">
          <div className="form-group input-group">
            <div className="input-group-text bg-warning border border-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-telephone-plus-fill mx-3"
                viewBox="0 0 16 16"
              >
                <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z" />
              </svg>
              <input
                placeholder="Phone number "
                type="tel"
                name="number"
                className="form-control mt-1"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" 
                required
              />
            </div>
          </div>
        </label> 
        <button type="submit" className="btn btn-dark btn-outline-warning w-30 btn-lg"> Add contact</button>
      </div>
    </form>
  );
};
 