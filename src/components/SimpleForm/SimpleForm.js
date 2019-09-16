import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SimpleForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return <form
    className="mt-3"
    noValidate
    onSubmit={handleSubmit}>

    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <Field
        id="firstName"
        placeholder="First Name"
        className="form-control"
        name="firstName"
        component="input"
        type="text"
      />
    </div>

    <div className="form-group mt-3">
      <label htmlFor="lastName">Last Name</label>
      <Field
        id="lastName"
        placeholder="Last Name"
        className="form-control"
        name="lastName"
        component="input"
        type="text" />
    </div>

    <div className="form-group mt-3">
      <label htmlFor="email">Email</label>
      <Field
        id="email"
        placeholder="Email"
        className="form-control"
        name="email"
        component="input"
        type="email" />
    </div>

    <div >
      <label>Sex</label>
      <div className="form-group form-check">
        <Field
          id="male"
          className="form-check-input"
          name="sex"
          component="input"
          type="radio"
          value="male" />
        <label
          className="form-check-label"
          htmlFor="male">Male</label>
      </div>
      <div className="form-group form-check">
        <Field
          id="female"
          className="form-check-input"
          name="sex"
          component="input"
          type="radio"
          value="female" />
        <label
          className="form-check-label"
          htmlFor="female">Female</label>
      </div>
      <div className="form-group form-check">
        <Field
          id="other"
          className="form-check-input"
          name="sex"
          component="input"
          type="radio"
          value="other" />
        <label
          className="form-check-label"
          htmlFor="other">Other</label>
      </div>
    </div>

    <div className="form-group mt-3">
      <label htmlFor="favoriteColor">Favorite Color</label>
      <div>
        <Field
          className="form-control"
          id="favoriteColor"
          name="favoriteColor"
          component="select">
          <option />
          <option value="ff0000">Red</option>
          <option value="00ff00">Green</option>
          <option value="0000ff">Blue</option>
        </Field>
      </div>
    </div>

    <div className="form-group form-check">
      <Field
        id="employed"
        className="form-check-input"
        name="employed"
        component="input"
        type="checkbox" />
      <label
        className="form-check-label"
        htmlFor="employed">Employed</label>
    </div>

    <div className="form-group">
      <label htmlFor="notes">Notes</label>
      <div>
        <Field
          className="form-control"
          id="notes"
          name="notes"
          component="textarea" />
      </div>
    </div>

    <div className="mt-3">
      <button
        type="submit"
        disabled={pristine || submitting}
        className="btn btn-secondary">Submit</button>

      <button
        type="submit"
        disabled={pristine || submitting} onClick={reset}
        className="btn btn-light ml-3">Clear</button>
    </div>
  </form>
}

export default reduxForm({
  form: 'simple',
  forceUnregisterOnUnmount: true,
  destroyOnUnmount: false
})(SimpleForm)

export const listing = `
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SimpleForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return <form
    className="mt-3"
    noValidate
    onSubmit={handleSubmit}>

    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <Field
        id="firstName"
        placeholder="First Name"
        className="form-control"
        name="firstName"
        component="input"
        type="text"
      />
    </div>

    <div className="form-group mt-3">
      <label htmlFor="lastName">Last Name</label>
      <Field
        id="lastName"
        placeholder="Last Name"
        className="form-control"
        name="lastName"
        component="input"
        type="text" />
    </div>

    <div className="form-group mt-3">
      <label htmlFor="email">Email</label>
      <Field
        id="email"
        placeholder="Email"
        className="form-control"
        name="email"
        component="input"
        type="email" />
    </div>

    <div >
      <label>Sex</label>
      <div className="form-group form-check">
        <Field
          id="male"
          className="form-check-input"
          name="sex"
          component="input"
          type="radio"
          value="male" />
        <label
          className="form-check-label"
          htmlFor="male">Male</label>
      </div>
      <div className="form-group form-check">
        <Field
          id="female"
          className="form-check-input"
          name="sex"
          component="input"
          type="radio"
          value="female" />
        <label
          className="form-check-label"
          htmlFor="female">Female</label>
      </div>
      <div className="form-group form-check">
        <Field
          id="other"
          className="form-check-input"
          name="sex"
          component="input"
          type="radio"
          value="other" />
        <label
          className="form-check-label"
          htmlFor="other">Other</label>
      </div>
    </div>

    <div className="form-group mt-3">
      <label htmlFor="favoriteColor">Favorite Color</label>
      <div>
        <Field
          className="form-control"
          id="favoriteColor"
          name="favoriteColor"
          component="select">
          <option />
          <option value="ff0000">Red</option>
          <option value="00ff00">Green</option>
          <option value="0000ff">Blue</option>
        </Field>
      </div>
    </div>

    <div className="form-group form-check">
      <Field
        id="employed"
        className="form-check-input"
        name="employed"
        component="input"
        type="checkbox" />
      <label
        className="form-check-label"
        htmlFor="employed">Employed</label>
    </div>

    <div className="form-group">
      <label htmlFor="notes">Notes</label>
      <div>
        <Field
          className="form-control"
          id="notes"
          name="notes"
          component="textarea" />
      </div>
    </div>

    <div className="mt-3">
      <button
        type="submit"
        disabled={pristine || submitting}
        className="btn btn-secondary">Submit</button>

      <button
        type="submit"
        disabled={pristine || submitting} onClick={reset}
        className="btn btn-light ml-3">Clear</button>
    </div>
  </form>
}

export default reduxForm({
  form: 'simple',
  forceUnregisterOnUnmount: true,
  destroyOnUnmount: false
})(SimpleForm)

`