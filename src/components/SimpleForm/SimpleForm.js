import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SimpleForm = (props) => {
  const { handleSubmit } = props
  return <form
    className="mt-3"
    noValidate
    onSubmit={handleSubmit}>
    <div>
      <label htmlFor="firstName">First Name</label>
      <div className="input-group">
        <Field
          placeholder="First Name"
          className="form-control"
          name="firstName"
          component="input"
          type="text"
        />
      </div>
    </div>
    <div className="mt-3">
      <label htmlFor="lastName">Last Name</label>
      <div className="input-group">
        <Field
          placeholder="Last Name"
          className="form-control"
          name="lastName"
          component="input"
          type="text" />
      </div>
    </div>
    <div className="mt-3">
      <label htmlFor="email">Email</label>
      <div className="input-group">
        <Field
          placeholder="Email"
          className="form-control"
          name="email"
          component="input"
          type="email" />
      </div>
    </div>
    <button type="submit" className="btn btn-secondary mt-3">Submit</button>
  </form>
}

export default reduxForm({ form: 'simple' })(SimpleForm)
