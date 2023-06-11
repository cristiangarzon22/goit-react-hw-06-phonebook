import { createSlice } from '@reduxjs/toolkit';




const initialArray = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [...initialArray],
    filter: '',
  },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => {
        return contact.id !== action.payload;
      });
    },
  },
});

export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;  ///

