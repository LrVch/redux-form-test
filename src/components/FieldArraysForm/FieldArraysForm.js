import React from 'react'
import { Field, reduxForm, FieldArray, formValueSelector } from 'redux-form'
import * as yup from 'yup';
import { connect } from 'react-redux'
import { syncValidator } from '../../utils'
import { RenderField } from '../shared'

const selector = formValueSelector('fieldArraysForm')

const validationSchema = yup
  .object()
  .shape({
    clubName: yup
      .string()
      .required('Club name is required')
      // eslint-disable-next-line no-template-curly-in-string
      .max(15, 'Must be ${max} characters or less')
      // eslint-disable-next-line no-template-curly-in-string
      .min(2, 'Must be ${min} characters or more'),
    members$: yup
      .array()
      .of(yup
        .object()
        .shape({
          firstName: yup
            .string()
            .required('First name is required'),
          lastName: yup
            .string()
            .required('Last name is required'),
          hobbies$: yup
            .array()
            .of(yup
              .string()
              .required('Hobbie is required')
            )
          // .max(4, 'No more than five hobbies allowed')
        })
      )
      // .max(2, 'Max 3 mebmers allowed')
      .required('At least one member must be entered')
  });

const warn = (values) => {
  // console.log('values', values)
  const warnings = {}

  if (!warnings.members$) {
    warnings.members$ = []
  }

  if (values.members$) {
    const membersArrayWarnings = []
    values.members$.forEach((member, memberIndex) => {
      const memberWarnings = {}


      if (member && member.hobbies$ && member.hobbies$.length) {
        if (member.hobbies$.length >= 5) {
          if (!memberWarnings.hobbies$) {
            memberWarnings.hobbies$ = []
          }
          memberWarnings.hobbies$._warning = 'No more than five hobbies allowed'
          membersArrayWarnings[memberIndex] = memberWarnings
        }
      }

    })
    if (membersArrayWarnings.length) {
      warnings.members$ = [...warnings.members$, ...membersArrayWarnings]
    }
  }

  if (values.members$ && values.members$.length >= 3) {
    warnings.members$._warning = 'Max 3 mebmers allowed'
  }

  return warnings
}

const renderHobbies = ({ fields, maxHobbiesLength, meta: { error, warning } }) => {
  return (<ul className="list-group">
    <li className="list-group-item">
      <button
        disabled={fields.length >= maxHobbiesLength}
        className="btn btn-secondary"
        type="button"
        onClick={() => fields.push()}
      >
        Add Hobby
      </button>
      {error && <div className="error-message">{error}</div>}
      {warning && <div className="warning-message">{warning}</div>}
    </li>

    {fields.map((hobby, index) => (
      <li className="list-group-item" key={index}>
        <button
          className="close"
          type="button"
          title="Remove Hobby"
          onClick={() => fields.remove(index)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <Field
          name={hobby}
          type="text"
          component={RenderField}
          label={`Hobby #${index + 1}`}
        />
      </li>
    ))}
  </ul>)
}

let Member = ({ member, index, fields, firstName, lastName, maxHobbiesLength }) =>
  <li className="list-group-item" key={index}>
    <button
      className="close"
      type="button"
      title="Remove Member"
      onClick={() => fields.remove(index)}
    >
      <span aria-hidden="true">&times;</span>
    </button>

    <h4>Member #{index + 1}
      {firstName && <br />}
      <span style={{
        color: 'grey',
        fontSize: '12px'
      }}>{firstName} {lastName}</span>
    </h4>
    <Field
      name={`${member}.firstName`}
      type="text"
      component={RenderField}
      label="First Name"
    />
    <Field
      name={`${member}.lastName`}
      type="text"
      component={RenderField}
      label="Last Name"
    />
    <FieldArray
      maxHobbiesLength={maxHobbiesLength}
      name={`${member}.hobbies$`}
      component={renderHobbies} />
  </li>

Member = connect(
  (state, props) => ({
    firstName: selector(state, `${props.member}.firstName`),
    lastName: selector(state, `${props.member}.lastName`)
  })
)(Member)

const renderMembers = ({
  fields,
  maxHobbiesLength,
  meta: { error, warning, submitFailed }
}) => {
  return (<ul className="list-group">
    <li className="list-group-item">
      <button
        disabled={fields.length >= 3}
        className="btn btn-secondary"
        type="button"
        onClick={() => fields.push({})}
      >
        Add Member
      </button>

      {submitFailed && error && <div className="error-message">{error}</div>}
      {warning && <div className="warning-message">{warning}</div>}
    </li>

    {fields.map((member, index) =>
      <Member
        maxHobbiesLength={maxHobbiesLength}
        member={member}
        fields={fields}
        index={index}
        key={index}
      />)}
  </ul>)
}

let FieldArraysForm = ({
  handleSubmit,
  maxHobbiesLength,
  pristine,
  reset,
  submitting
}) => {
  return <form
    className="mt-3"
    noValidate
    onSubmit={handleSubmit}>

    <div className="mt-3">
      <Field
        name="clubName"
        type="text"
        component={RenderField}
        label="Club Name"
      />
    </div>

    <FieldArray
      maxHobbiesLength={maxHobbiesLength}
      name="members$"
      component={renderMembers} />

    <div className="mt-3">
      <button
        type="submit"
        disabled={submitting}
        className="btn btn-secondary">Submit</button>

      <button
        type="submit"
        disabled={pristine || submitting} onClick={reset}
        className="btn btn-light ml-3">Clear</button>
    </div>
  </form>
}

export default reduxForm({
  form: 'fieldArraysForm',
  warn,
  validate: syncValidator(validationSchema),
})(FieldArraysForm)