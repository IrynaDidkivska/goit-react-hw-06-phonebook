import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { ContactList } from './ContactsList/ContactList';
import { ContactForm } from './ContactsForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Title, Wrapper } from './App.styled';
import { PrevContacts } from './PrevContacts/PrevContacts';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //Додаємо новий контакт
  const addNewContact = newContact => {
    const checkContact = contacts.find(
      contact => contact.name === newContact.name
    );
    if (checkContact) {
      toast.warning(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prev => [...prev, newContact]);
    }
  };

  //вводимо в інтуп фільтра
  const hendleFilterInput = value => {
    setFilter(value);
  };
  //фільтруємо
  const getFilteredContact = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  //видаляємо
  const hendleDeleteContact = (id, name) => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
    toast.success(`Контакт ${name} успішно видалено!`);
  };

  const filteredContact = getFilteredContact(filter);

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm addNewContact={addNewContact} />
      <h2>Contacts</h2>

      <Filter filter={filter} onFilterInput={hendleFilterInput} />

      <ContactList contacts={filteredContact} onDelete={hendleDeleteContact} />
      <PrevContacts />
    </Wrapper>
  );
};
