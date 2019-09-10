import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import * as yup from 'yup';
import { connect } from 'react-redux'
import { RenderField } from '../shared'
import { syncValidator } from '../../utils'
import { getUserColors } from '../../store/selectors/user'

const validationSchema = yup.object().shape({
  nickname: yup
    .string()
    .when('$nicknameRequired', (nicknameRequired, schema) =>
      (nicknameRequired ? schema.required('Required') : schema.required('Required'))),
  firstName: yup
    .string()
    .required('Required')
    // eslint-disable-next-line no-template-curly-in-string
    .max(15, 'Must be ${max} characters or less'),
  lastName: yup
    .string()
    .required('Required'),
  hasEmail: yup
    .boolean(),
  email: yup
    .string()
    .email('Invalid email')
    .when('hasEmail', {
      is: true,
      then: yup.string().required('Required'),
      otherwise: yup.string()
    }),
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

let SelectingFormValues = ({
  colors,
  handleSubmit,
  hasEmailValue,
  favoriteColorValue,
  context: {nicknameRequired},
  pristine,
  reset,
  submitting,
}) => {
  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit}>

        <fieldset disabled={submitting}>
          <div className="mt-3">
            <Field
              noValidate={!nicknameRequired}
              name="nickname"
              type="text"
              component={RenderField}
              label="Nickname"
            />
          </div>

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
              noValidate
              name="hasEmail"
              type="checkbox"
              component={RenderField}
              label="Has email?" />
          </div>

          {hasEmailValue && <div className="mt-3">
            <Field
              name="email"
              type="email"
              component={RenderField}
              label="Email" />
          </div>}

          <div className="mt-3">
            <Field
              label="Favorite Color"
              name="favoriteColor"
              type="select"
              component={RenderField}>
              <option />
              {colors && colors.map((color, i) => (
                <option key={color + i} value={color}>{color}</option>
              ))}
            </Field>
          </div>

          {favoriteColorValue && (
            <div
              style={{
                height: 80,
                width: 200,
                margin: '10px auto',
                backgroundColor: favoriteColorValue
              }}
            />
          )}

          <div className="mt-3">
            <Field
              name="agreement"
              type="checkbox"
              component={RenderField}
              label="Agreement with something terrible" />
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-secondary"
              disabled={submitting}>
              Submit
            </button>
            <button
              type="button"
              className="btn btn-light ml-3"
              disabled={pristine || submitting}
              onClick={reset}>
              Clear Values
            </button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

const selector = formValueSelector('selectingFormValues')

const mapStateToProps = state => ({
  colors: getUserColors(state),
  hasEmailValue: selector(state, 'hasEmail'),
  favoriteColorValue: selector(state, 'favoriteColor')
})

SelectingFormValues = reduxForm({
  form: 'selectingFormValues',
  validate: syncValidator(validationSchema),
  touchOnChange: true
})(SelectingFormValues)


SelectingFormValues = connect(
  mapStateToProps,
)(SelectingFormValues)

export default SelectingFormValues
