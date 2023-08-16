import React from 'react';
import { Title, Wrapper } from './App.styled';
import { ContactList } from 'components/ContactsList/ContactList';
import { ContactForm } from 'components/ContactsForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};
