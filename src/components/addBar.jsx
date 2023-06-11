import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/addContacts/addContacts";
import { nanoid } from "@reduxjs/toolkit";
import Filter from "./Filter";
import React from "react";

const Bar = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const newContactAudit = (newContact) => {
    return contacts.filter(
      (contact) =>
        contact.name?.toLowerCase() === newContact.name?.toLowerCase()
    );
  };

  const contactFormSubmitHandler = (newContact) => {
    if (newContactAudit(newContact).length > 0) {
      alert(`${newContact.name} is already in contacts.`);
      return false;
    } else {
      dispatch(addContact(newContact));
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const id = nanoid();
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (contactFormSubmitHandler({ id, name, number })) {
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Contact</h3>
      <input type="text" placeholder="Add Contact" name="name" />
      <input type="text" placeholder="Number" name="number" />
      <Filter /> {/* Agregar el componente Filter aquí */}
      <button type="submit">Add task</button>
    </form>
  );
};
export default Bar;