// HTTP requests go here
// axios is a promised based HTTP client
// used to make HTTP requests from node
import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "./types";

// GET CONTACTS
export const getContacts = () => (dispatch, getState) => {
  axios
    .get("/api/contacts/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE CONTACTS
export const deleteContact = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/contacts/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteContact: "Contact Deleted" }));
      dispatch({
        type: DELETE_CONTACT,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD CONTACTS
export const addContact = (contact) => (dispatch, getState) => {
  axios
    .post("/api/contacts/", contact, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addContact: "Contact Added" }));
      dispatch({
        type: ADD_CONTACT,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
