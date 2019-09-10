import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as yup from 'yup';
import { RenderField } from '../shared'
import { syncValidator, asyncValidate } from '../../utils'

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Required')
    // eslint-disable-next-line no-template-curly-in-string
    .max(15, 'Must be ${max} characters or less')
    // eslint-disable-next-line no-template-curly-in-string
    .min(2, 'Must be ${min} characters or more'),
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
});

const AsyncBlurValidation = ({ handleSubmit, pristine, reset, submitting }) => {
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
  form: 'asyncBlurValidation',
  validate: syncValidator(validationSchema),
  asyncValidate: asyncValidate,
  asyncBlurFields: ['username', 'email', 'age'],
  persistentSubmitErrors: true
})(AsyncBlurValidation)