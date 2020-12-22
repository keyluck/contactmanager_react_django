//Evaluate action and send down certain state depending on what that action does
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "../actions/types.js";

//Fetching leads from backend and putting them into initial state
const initialState = {
  leads: [],
};

//dispatch action to the reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload, //leads sent as payload through action
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== action.payload),
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload],
      };
    default:
      return state;
  }
}
