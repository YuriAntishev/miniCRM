import { v4 as uuidv4 } from 'uuid';

const ADD_CONTACT = 'ADD_CONTACT';
const DELETE_CONTACT = 'DELETE_CONTACT';
const UPDATE_CONTACT = 'UPDATE_CONTACT';
const SET_CURRENT = 'SET_CURRENT';
const CLEAR_CURRENT = 'CLEAR_CURRENT';
const FILTER_CONTACTS = 'FILTER_CONTACTS';
const CLEAR_FILTER = 'CLEAR_FILTER';

let initialState = {
  contacts: [
    {
      id: 1,
      name: "Lex Luthor",
      email: "lexus@gmail.com",
      phone: "784-666-123",
    },
    {
      id: 2,
      name: "Optimus Prime",
      email: "opti@gmail.com",
      phone: "784-555-123",
    },
    {
      id: 3,
      name: "Clark Kent",
      email: "kent@gmail.com",
      phone: "111-111-5555",
    },
    {
      id: 4,
      name: "Arnold Shwarzenegger",
      email: "shwartz@gmail.com",
      phone: "6661-51-3355",
    }
  ],
  current: null,
  filtered: null
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload)
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(
          contact => contact.id === action.payload.id ? action.payload : contact
        )
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter(
          contact => {
            const regex = new RegExp(`${action.payload}`, 'gi');
            return contact.name.match(regex) || contact.email.match(regex);
          })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};

export function addContactActionCreator(contact) {
  contact.id = uuidv4();
  return { type: ADD_CONTACT, payload: contact };
}

export function deleteContactActionCreator(id) {
  return { type: DELETE_CONTACT, payload: id };
}

export function setCurrentActionCreator(contact) {
  return { type: SET_CURRENT, payload: contact };
}

export function clearCurrentActionCreator() {
  return { type: CLEAR_CURRENT };
}

export function updateContactActionCreator(contact) {
  return { type: UPDATE_CONTACT, payload: contact };
}

export function filterContactActionCreator(text) {
  return { type: FILTER_CONTACTS, payload: text };
}

export function clearFilterActionCreator() {
  return { type: CLEAR_FILTER };
}

export default ContactReducer;