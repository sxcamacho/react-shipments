import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { formValidation, validateAddressAndSubmit } from "./validations";
import IStopPointFormInputProps from "../../Interfaces/IStopPointFormInputProps";
import styled from "styled-components";

const selector = formValueSelector("stopPoint");

class StopPointForm extends Component<IStopPointFormInputProps> {
  renderField({ input, label, type, meta: { touched, error } }) {
    return (
      <div className="field">
        <FieldLabel className="label">{label}</FieldLabel>
        <div className="control">
          <input
            {...input}
            type={type}
            className={`input ${touched && error ? "is-danger" : ""}`}
            placeholder=""
          />
          {touched && error && <p className="help is-danger">{error}</p>}
        </div>
      </div>
    );
  }

  render() {
    const { pristine, invalid, reset, submitting, handleSubmit } = this.props;

    return (
      <div className="card" data-testid="stop-point-form">
        <CardHeader className="card-header">
          <span className="icon is-small is-left">
            <i className="fas fa-map-marked-alt"></i>
          </span>
          <p className="card-header-title">
            {this.props.id
              ? `Update stop point ${this.props.id}`
              : "Add stop point"}
          </p>
        </CardHeader>
        <div className="card-content">
          <form
            onSubmit={handleSubmit(validateAddressAndSubmit)}
            className="stop-point-form"
          >
            {/* NAME */}
            <Field
              name="name"
              type="text"
              label="Name"
              component={this.renderField}
            />
            {/* ADDRESS */}
            <Field
              name="address"
              type="text"
              label="Address"
              component={this.renderField}
            />
            {/* BUTTONS */}
            <div className="field is-grouped">
              <div className="control">
                <button
                  className={`button is-link ${submitting ? "is-loading" : ""}`}
                  type="submit"
                  disabled={invalid || submitting}
                >
                  {this.props.id ? "Update stop point" : "Add stop point"}
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-link is-light"
                  type="button"
                  disabled={pristine || submitting}
                  onClick={reset}
                >
                  {this.props.id ? "Cancel" : "Clear Values"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// styles
const CardHeader = styled.header`
  box-shadow: none;
  border-bottom: 1px solid #eee;
  align-items: center;
  padding: 0 20px;
`;

const FieldLabel = styled.label`
  font-weight: 400;
`;

// redux form
const StopPointFormConnected = connect((state: any) => ({
  id: selector(state, "id"),
  name: selector(state, "name"),
  address: selector(state, "address"),
}))(StopPointForm);

// redux
export default reduxForm({
  form: "stopPoint",
  validate: formValidation,
})(StopPointFormConnected);
