import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getContacts,
  deleteContact,
  editContact,
} from "../../actions/contacts";

export class Contacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
    editContact: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <Fragment>
        <h2>Contacts</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Notes</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.first_name}</td>
                <td>{contact.last_name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone_number}</td>
                <td>{contact.notes}</td>

                <td>
                  <button
                    onClick={this.props.deleteContact.bind(this, contact.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
});

export default connect(mapStateToProps, {
  getContacts,
  deleteContact,
  editContact,
})(Contacts);
