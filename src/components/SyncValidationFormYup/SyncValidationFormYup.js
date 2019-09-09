import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as yup from 'yup';
import { /*asyncValidator,*/ syncValidator } from '../../utils'
import {  RenderField } from '../shared'

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Required')
    // eslint-disable-next-line no-template-curly-in-string
    .max(15, 'Must be ${max} characters or less'),
  email: yup
    .string()
    .required('Required')
    .email('Invalid email address'),
  age: yup
    .number()
    .typeError('Only number is acceptable')
    .required('Required')
    .positive('Only positive number is acceptable')
    .integer('Only integer number is acceptable')
    .min(18, 'Sorry, you must be at least 18 years old')
});

const warningSchema = yup.object().shape({
  age: yup
    .number()
    .min(19, 'Hmm, you seem a bit young...')
})



const SyncValidationFormYup = ({ handleSubmit, pristine, reset, submitting }) => {
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
        <Field
          name="email"
          type="email"
          component={RenderField}
          label="Email" />
      </div>

      <div className="mt-3">
        <Field
          name="age"
          type="text"
          component={RenderField}
          label="Age" />
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
  form: 'syncValidationYup',
  validate: syncValidator(validationSchema),
  warn: syncValidator(warningSchema)
  // asyncValidate: asyncValidator(schema)
})(SyncValidationFormYup)