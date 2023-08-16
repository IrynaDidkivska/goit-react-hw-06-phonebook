import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filterValue: '',
};

export const listSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNewContact: {
      //в значення (contact) приходить пейлод з компонента - створений новий контакт
      prepare: contact => {
        // Повертаємо новий доповнений payload
        return {
          // Розширюємо пейлоад будь-якими данними
          payload: { id: nanoid(), ...contact },
        };
      },
      reducer: (state, action) => {
        // Пушимо в массив новий пейлоад
        state.contacts.push(action.payload);
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact: (state, action) => {
      state.filterValue = action.payload; // Оновлення значення фільтра на основі переданої дії
    },
  },
});
// Екпортуємо наші екшени, щоб вони працювали в компонентах при dispatch
export const { addNewContact, deleteContact, filterContact } =
  listSlice.actions;
// Eкспортуємо редьюсер для того, щоб додати його в configureStore, котрий в store.js
export const contactReducer = listSlice.reducer;
