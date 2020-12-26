//Evaluate action and send down certain state depending on what that action does
import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  CLEAR_CONTACTS,
} from "../actions/types.js";

//Fetching contacts from backend and putting them into initial state
const initialState = {
  contacts: [],
};

//dispatch action to the reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload, //contact sent as payload through action
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: [],
      };
    default:
      return state;
  }
}
