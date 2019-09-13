import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {  RenderField } from '../shared'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const SyncValidationForm = ({handleSubmit, pristine, reset, submitting}) => {
  return (
    <form
      noValidate
      onSubmit={handleSubmit}>
      <div className="mt-3">
        <Field
          name="username"
          type="text"
          component={RenderField}
          label="Username"
        />
      </div>
      <div className="mt-3">
        <Field name="email" type="email" component={RenderField} label="Email" />
      </div>
      <div className="mt-3">
        <Field name="age" type="number" component={RenderField} label="Age" />
      </div>
      <div>
        <button type="submit" className="btn btn-secondary" disabled={submitting}>
          Submit
        </button>
        <button type="button" className="btn btn-light ml-3" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidation',
  validate,
  warn
})(SyncValidationForm)

export const listing = `
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {  RenderField } from '../shared'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const SyncValidationForm = ({handleSubmit, pristine, reset, submitting}) => {
  return (
    <form
      noValidate
      onSubmit={handleSubmit}>
      <div className="mt-3">
        <Field
          name="username"
          type="text"
          component={RenderField}
          label="Username"
        />
      </div>
      <div className="mt-3">
        <Field name="email" type="email" component={RenderField} label="Email" />
      </div>
      <div className="mt-3">
        <Field name="age" type="number" component={RenderField} label="Age" />
      </div>
      <div>
        <button type="submit" className="btn btn-secondary" disabled={submitting}>
          Submit
        </button>
        <button type="button" className="btn btn-light ml-3" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidation',
  validate,
  warn
})(SyncValidationForm)
`