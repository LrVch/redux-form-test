import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as yup from 'yup';
import { connect } from 'react-redux'
import { RenderField } from '../shared'
import { syncValidator } from '../../utils';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';
import { getUserColors, getUserAccount } from '../../store/selectors/user';
import { userDataSuccess } from '../../store/actions';
import { userAccount as mockUserAccount } from '../../utils'

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

let InitializeFromState = ({
  colors,
  handleSubmit,
  load,
  pristine,
  reset,
  submitting,
  userAccount
}) => {
  const isAccount = !!Object.keys(userAccount).length
  return (
    <>
      <div>
        <button className="btn btn-secondary" type="button" onClick={() => load(mockUserAccount)}>
          Load Account
        </button>
      </div>
      <form
        noValidate
        onSubmit={handleSubmit}>

        <fieldset disabled={!isAccount || submitting}>
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
              {colors && colors.map((color, i) => (
                <option key={color + i} value={color}>{color}</option>
              ))}
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
        </fieldset>
      </form>
    </>
  )

}

const mapStateToProps = state => ({
  colors: getUserColors(state),
  userAccount: getUserAccount(state),
  initialValues: getUserAccount(state),
})

InitializeFromState = reduxForm({
  form: 'initializeFromState',
  validate: syncValidator(validationSchema),
  enableReinitialize: true,
  forceUnregisterOnUnmount: true,
  destroyOnUnmount: false
})(InitializeFromState)

InitializeFromState = connect(
  mapStateToProps,
  { load: userDataSuccess }
)(InitializeFromState)

export default InitializeFromState


export const listing = `
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as yup from 'yup';
import { connect } from 'react-redux'
import { RenderField } from '../shared'
import { syncValidator } from '../../utils';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';
import { getUserColors, getUserAccount } from '../../store/selectors/user';
import { userDataSuccess } from '../../store/actions';
import { userAccount as mockUserAccount } from '../../utils'

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('Required')
    // eslint-disable-next-line no-template-curly-in-string
    .max(15, 'Must be \${max} characters or less'),
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

let InitializeFromState = ({
  colors,
  handleSubmit,
  load,
  pristine,
  reset,
  submitting,
  userAccount
}) => {
  const isAccount = !!Object.keys(userAccount).length
  return (
    <>
      <div>
        <button className="btn btn-secondary" type="button" onClick={() => load(mockUserAccount)}>
          Load Account
        </button>
      </div>
      <form
        noValidate
        onSubmit={handleSubmit}>

        <fieldset disabled={!isAccount || submitting}>
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
              {colors && colors.map((color, i) => (
                <option key={color + i} value={color}>{color}</option>
              ))}
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
        </fieldset>
      </form>
    </>
  )

}

const mapStateToProps = state => ({
  colors: getUserColors(state),
  userAccount: getUserAccount(state),
  initialValues: getUserAccount(state),
})

InitializeFromState = reduxForm({
  form: 'initializeFromState',
  validate: syncValidator(validationSchema),
  enableReinitialize: true,
  forceUnregisterOnUnmount: true,
  destroyOnUnmount: false
})(InitializeFromState)

InitializeFromState = connect(
  mapStateToProps,
  { load: userDataSuccess }
)(InitializeFromState)

export default InitializeFromState

`