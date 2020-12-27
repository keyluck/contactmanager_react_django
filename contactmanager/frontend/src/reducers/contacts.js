//Evaluate action and send down certain state depending on what that action does
import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  EDIT_CONTACT,
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
          //returns array where all ID's != ID from action.payload
          (contact) => contact.id !== action.payload
        ),
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          //returns array with updated contact info
          return contact.id === action.payload.id ? action.payload : contact;
        }),
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
}
