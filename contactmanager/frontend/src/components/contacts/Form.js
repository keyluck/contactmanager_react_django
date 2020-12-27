import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addContact } from "../../actions/contacts";

export class Form extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    notes: "",
  };

  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  //Submit form data
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, phone_number, notes } = this.state;
    const contact = { first_name, last_name, email, phone_number, notes };
    this.props.addContact(contact);
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      notes: "",
    });
  };
  render() {
    const { first_name, last_name, email, phone_number, notes } = this.state;

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Contact</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="first_name"
              onChange={this.onChange}
              value={first_name}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="last_name"
              onChange={this.onChange}
              value={last_name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              className="form-control"
              type="tel"
              name="phone_number"
              onChange={this.onChange}
              value={phone_number}
            />
          </div>
          <div className="form-group">
            <label>Notes</label>
            <textarea
              className="form-control"
              type="text"
              name="notes"
              onChange={this.onChange}
              value={notes}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn
            btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addContact })(Form);
