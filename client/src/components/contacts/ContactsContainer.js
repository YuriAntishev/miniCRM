import {
  addContactActionCreator,
  deleteContactActionCreator,
  setCurrentActionCreator,
  clearCurrentActionCreator,
  updateContactActionCreator,
  filterContactActionCreator,
  clearFilterActionCreator
} from '../../redux/reducers/contact-reducer';
import Contacts from './Contacts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    post_contacts: state.contactsPage.contacts,
    current: state.contactsPage.current,
    filtered: state.contactsPage.filtered
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    AddContact: (contact) => {
      const action = addContactActionCreator(contact);
      dispatch(action);
    },
    DeleteContact: (id) => {
      const action = deleteContactActionCreator(id);
      dispatch(action);
    },
    SetCurrent: (contact) => {
      const action = setCurrentActionCreator(contact);
      dispatch(action);
    },
    ClearCurrent: () => {
      const action = clearCurrentActionCreator();
      dispatch(action);
    },
    UpdateContact: (contact) => {
      const action = updateContactActionCreator(contact);
      dispatch(action);
    },
    FilterContact: (text) => {
      const action = filterContactActionCreator(text);
      dispatch(action);
    },
    ClearFilter: (contact) => {
      const action = clearFilterActionCreator(contact);
      dispatch(action);
    }
  }
}

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default ContactsContainer;
