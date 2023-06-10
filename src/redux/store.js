import { contactReducer } from "./addContacts/addContacts";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        contacto: contactReducer,
         
    },
});
