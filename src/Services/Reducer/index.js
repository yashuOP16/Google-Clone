
import { combineReducers } from 'redux';
import ContactsReducer from './ContactsReducer';
// import bookReducer from './BooksReducer'


 const rootreducer = combineReducers({ContactsReducer});

export default rootreducer;