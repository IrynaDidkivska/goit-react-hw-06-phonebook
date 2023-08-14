import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Button, Contact, List, Title } from './PrevContact.styled';
import { MyContext } from 'context/MyContext';

export const PrevContacts = () => {
  const hendleDeleteContact = contact => {
    toast.error(
      `You do not have access to delete this contact ${contact.name}! Please choose a non-default contact`
    );
  };
  const prevContacts = useContext(MyContext);
  return (
    <div>
      <Title>Default Contacts</Title>
      <List>
        {prevContacts.map(contact => (
          <Contact key={contact.id}>
            <p>{contact.name} : </p>
            <p>{contact.number}</p>
            <Button
              onClick={() => {
                hendleDeleteContact(contact);
              }}
            >
              Delete
            </Button>
          </Contact>
        ))}
      </List>
    </div>
  );
};
