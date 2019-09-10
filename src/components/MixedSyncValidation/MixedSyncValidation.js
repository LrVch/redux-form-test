import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as yup from 'yup';
import { syncValidator } from '../../utils'
import { RenderField } from '../shared'
import {
  alphaNumeric,
  aol,
  // email,
  // maxLength,
  minLength,
  russianPhoneNumberPattern,
  minValue,
  // number,
  required,
  tooYoung
} from '../../utils'

// eslint-disable-next-line no-template-curly-in-string
// const maxLength15 = maxLength(15, 'Must be ${max} characters or less, current length is ${length} and the current value is \' ${value}\'')
// eslint-disable-next-line no-template-curly-in-string
const minLength2 = minLength(2, 'Must be ${min} characters or more, current length is ${length} and the current value is \' ${value}\'')
// const userNameRequired = required('Username is required')
const userNameAlphaNumeric = alphaNumeric('Only alphanumeric characters in username are allowed')
const phoneNumberRequired = required('Phone number is required')
const userRussianPhoneNumberPattern = russianPhoneNumberPattern()
// const userEmail = email()
const userDeprecetedMail = aol()
const userEmailRequired = required('Email is required')
const minValue13 = minValue(13)
// eslint-disable-next-line no-template-curly-in-string
const userTooYoung = tooYoung(16, 'You have met the minimum age requirement! But it\'s better to be ${age}')
const userAgeRequired = required('Age is required')
// const ageNumber = number()

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    // eslint-disable-next-line no-template-curly-in-string
    .max(15, 'Must be ${max} characters or less'),
  email: yup
    .string()
    .email('Invalid email address'),
  age: yup
    .number()
    // .required('Required')
    .typeError('Only number is acceptable')
    .positive('Only positive number is acceptable')
    .integer('Only integer number is acceptable')
    // .min(18, 'Sorry, you must be at least 18 years old')
});


const MixedSyncValidation = ({ handleSubmit, pristine, reset, submitting }) => {
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
          validate={[ minLength2]}
          warn={userNameAlphaNumeric}
        />
      </div>

      <div className="mt-3">
        <Field
          name="email"
          type="email"
          component={RenderField}
          label="Email"
          validate={[userEmailRequired]}
          warn={userDeprecetedMail} />
      </div>

      <div className="mt-3">
        <Field
          name="age"
          type="text"
          component={RenderField}
          label="Age"
          validate={[userAgeRequired, minValue13]}
          warn={userTooYoung} />
      </div>

      <div className="mt-3">
        <Field
          name="phone"
          type="text"
          component={RenderField}
          label="Phone number"
          validate={[phoneNumberRequired, userRussianPhoneNumberPattern]} />
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
  form: 'mixedSyncValidation',
  validate: syncValidator(validationSchema)
})(MixedSyncValidation)