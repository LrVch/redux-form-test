import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as yup from 'yup';
import { RenderField } from '../shared'
import { syncValidator } from '../../utils';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('Required')
    // eslint-disable-next-line no-template-curly-in-string
    .max(15, 'Must be ${max} characters or less'),
  lastName: yup
    .string()
    .required('Required'),
  age: yup
    .number()
    .typeError('Only number is acceptable')
    .required('Required')
    .positive('Only positive number is acceptable')
    .integer('Only integer number is acceptable')
    .min(18, 'Sorry, you must be at least 18 years old'),
  sex: yup
    .string()
    .required('Required'),
  favoriteColor: yup
    .string()
    .required('Required'),
  agreement: yup
    .boolean()
    .test(
      'is-agreement',
      'Required',
      value => !!value
    )
});

const InitializeFromState = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form
      noValidate
      onSubmit={handleSubmit}>

      <div className="mt-3">
        <Field
          name="firstName"
          type="text"
          component={RenderField}
          label="First Name"
        />
      </div>

      <div className="mt-3">
        <Field
          name="lastName"
          type="text"
          component={RenderField}
          label="Last Name" />
      </div>

      <div className="mt-3">
        <Field
          name="age"
          type="text"
          component={RenderField}
          label="Age" />
      </div>

      <div className="mt-3">
        <label>Sex</label>
        <Field
          name="sex"
          type="radio"
          value="male"
          component={RenderField}
          label="Male" />
        <Field
          name="sex"
          type="radio"
          value="female"
          component={RenderField}
          label="Female" />
        <Field
          name="sex"
          type="radio"
          value="other"
          component={RenderField}
          label="Other" />

        <Field name="sex" component={ErrorMessage} />
      </div>

      <div className="mt-3">
        <Field
          label="Favorite Color"
          name="favoriteColor"
          type="select"
          component={RenderField}>
          <option />
          <option value="ff0000">Red</option>
          <option value="00ff00">Green</option>
          <option value="0000ff">Blue</option>
        </Field>
      </div>

      <div className="mt-3">
        <Field
          noValidate
          name="employed"
          type="checkbox"
          component={RenderField}
          label="Employed" />
      </div>

      <div className="mt-3">
        <Field
          noValidate
          name="bio"
          type="textarea"
          component={RenderField}
          label="Bio" />
      </div>

      <div className="mt-3">
        <Field
          name="agreement"
          type="checkbox"
          component={RenderField}
          label="Agreement with something terrible" />
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
  form: 'initializeFromState',
  validate: syncValidator(validationSchema),
})(InitializeFromState)
