'use client'
import React from 'react'
import { createContext, useState } from 'react'
export const ContactContext = createContext();

export const ContactProvider = ({children}) => {
    const [contact, setContact] = useState([
        { id: 1, name: 'Contact 1 ', number: '0304-4979487' },
    ]);

    const addContact = (newContact) => {
        setContact([...contact, newContact]);
    }

    const editContact = (id, updatedContact) => {
        setContact(prevcontact => {
            return prevcontact.map(contact => {
              if (contact.id === id) {
                return { ...contact, ...updatedContact };
              }
              return contact;
            });
        });
    }

    const deleteContact = (id) => {
        const updatedcontact =  contact.filter((contact) => contact.id !== id);
        setContact(updatedcontact);
    }

    return (
        <ContactContext.Provider value={{contact, addContact, editContact, deleteContact}}>
            <div>{children}</div>
        </ContactContext.Provider>
    )
}
