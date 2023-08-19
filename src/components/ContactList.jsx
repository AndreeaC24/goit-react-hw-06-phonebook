import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import { deleteContact } from '../redux/contactsSlice';
import { NotFound } from './NotFound';
 
export const ContactList = () => {
  const contacts = useSelector(getContacts);  
  const dispatch = useDispatch();  
  console.log(contacts);

  const textFilter = useSelector(state => state.filters.textFilter);
  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(textFilter.toLowerCase())
  );

  const handleRemove = id => {
    console.log(id);
    dispatch(deleteContact(id));  
  };

  if (filteredContacts.length === 0) {
    return <NotFound />;
  }
  return (
    <div className="row d-flex justify-content-center align-items-center">
      {contacts.length === 0 && <NotFound />}
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th className="text-center align-middle">Name</th>
            <th className="text-center align-middle">Phone Number</th>
            <th className="text-center align-middle">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map(contact => (
            <tr key={contact.id} className="fw-normal">
              <td className="text-center align-middle"> 
                  <>
                    {contact.name
                      .split(' ')
                      .map(n => n.charAt(0).toUpperCase() + n.slice(1))
                      .join(' ')}
                  </>  
              </td>
              <td className="text-center align-middle">{contact.number}</td>
              <td className="text-center align-middle">
                <button
                  className="btn btn-warning"
                  type="button"
                  onClick={() => {
                    handleRemove(contact.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 
