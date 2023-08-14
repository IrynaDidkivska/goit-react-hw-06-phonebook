import React from 'react';
import { Button, Form, Input } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const ContactForm = ({ addNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // вводимо в інпут
  const hendleAddInput = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
      return;
    }
    setNumber(value);
  };

  //додаємо до списку
  const hendleFormSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    const newContact = { id: nanoid(), name, number };
    setName('');
    setNumber('');
    addNewContact(newContact);
  };

  return (
    <Form onSubmit={hendleFormSubmit}>
      <label htmlFor="name">
        Name
        <Input
          value={name}
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={hendleAddInput}
          placeholder="Name Surname"
          autoFocus
        />
      </label>
      <label htmlFor="name">
        Number
        <Input
          value={number}
          id="name"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={hendleAddInput}
          placeholder="Phone Number"
        />
      </label>
      <Button>Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
