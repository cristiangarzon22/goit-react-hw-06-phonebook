import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/addContacts/addContacts";
import React from "react";

const List = () => {
  //const Dispatch = useDispatch();

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  const filterValueLowerCase = filter?.toLowerCase();

  const visibleContacts = contacts.filter(contact => {
    return contact.name?.toLowerCase().includes(filterValueLowerCase);
  });

  return (
    <ul>
      {visibleContacts.map(e => (
        <li key={e.id}>
          {e.name}:{e.number}{' '}
          <button type="button" onClick={() => deleteContactHandler(e.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;