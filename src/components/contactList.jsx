import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DeleteContact } from "redux/addContacts/addContacts";
import React from "react";
const List = () => {
  const Dispatch = useDispatch();
    const statusContact = useSelector((state) => state.contacto.Contacts);
    const handleDelete = (id) =>{
      Dispatch(DeleteContact(id));
    }
    if (!Array.isArray(statusContact)) {
      return null; 
    }
    return(
        <ul>
 

      {statusContact.map((e) => (
        <li key={e.id}>{e.name}:{e.number} <button type="button" onClick={() => handleDelete(e.id)}>Delete</button></li>
       
      ))}
    </ul>
    );
};

export default List;