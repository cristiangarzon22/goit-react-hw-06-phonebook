import { createSlice, nanoid } from "@reduxjs/toolkit";
const contactsSliceInitial = {
Contacts : [
  { id: nanoid(), name: "asdffrrg", number: "34567543" },
  { id: nanoid(), name: "jhgjhgh", number: "34567543" },
  { id: nanoid(), name: "lkmnhjjjk", number: "34567345543" },
],
 filter1:""
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsSliceInitial,
  reducers: {
    addContact(state, {payload}) {
      const existingContact = state.Contacts.find(contact => contact.name === payload.nombre);

  if (existingContact) {
    alert("No se puede insertar el usuario");
  } else {
    state.Contacts.push({ id: nanoid(), name: payload.nombre, number: payload.numero });
  }
      },
    DeleteContact(state, {payload}){
      state.Contacts = state.Contacts.filter(
        (contact) => contact.id !== payload
      );
    },
    filtrar(state, { payload }) {
      return {
        ...state,
        filter1: payload,
        Contacts: state.Contacts.filter((contact) =>
          contact.name.toLowerCase().includes(payload.toLowerCase())
        ),
      };
    },
    
    
  }
});

export const { addContact,DeleteContact,filtrar } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
