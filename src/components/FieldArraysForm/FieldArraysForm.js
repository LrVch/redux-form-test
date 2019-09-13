import React, { useCallback, useState } from 'react'
import { Field, reduxForm, FieldArray, formValueSelector } from 'redux-form'
import * as yup from 'yup';
import { connect } from 'react-redux'
import { syncValidator } from '../../utils'
import { RenderField } from '../shared'
import { userClubInfo as mockUserClubInfo } from '../../utils'
import { getUserClubInfo } from '../../store/selectors/user';
import { userClubInfoSuccess } from '../../store/actions';
import M from '../FieldArraysForm/Member/Member'

let Member = M

const selector = formValueSelector('fieldArraysForm')

const validationSchema = yup
  .object()
  .shape({
    clubName: yup
      .string()
      .required('Club name is required')
      // eslint-disable-next-line no-template-curly-in-string
      .max(25, 'Must be ${max} characters or less')
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

Member = connect(
  (state, props) => ({
    firstName: selector(state, `${props.member}.firstName`),
    lastName: selector(state, `${props.member}.lastName`),
    hobbies: selector(state, `${props.member}.hobbies$`)
  })
)(Member)

const RenderMembers = ({
  fields,
  maxHobbiesLength,
  meta: { error, warning, submitFailed }
}) => {
  const allFields = fields.getAll()
  const [isDragging, setIsDragging] = useState(false)
  const [hoverIndex, setHoverIndex] = useState(0)
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      setHoverIndex(hoverIndex)
      fields.swap(dragIndex, hoverIndex)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allFields, fields],
  )
  return (
    <ul className="list-group">
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

      <div>
        {fields.map((member, index) =>
          <Member
            highLight={isDragging && index === hoverIndex}
            blockInput={isDragging}
            beginDrag={() => setIsDragging(true)}
            endDrag={() => setIsDragging(false)}
            moveCard={moveCard}
            maxHobbiesLength={maxHobbiesLength}
            member={member}
            fields={fields}
            index={index}
            key={index}
          />)}
      </div>
    </ul>
  )
}

let FieldArraysForm = ({
  handleSubmit,
  maxHobbiesLength,
  pristine,
  reset,
  submitting,
  load
}) => {
  return (
    <>
      <div>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => load(mockUserClubInfo)}>
          Load club info
        </button>
      </div>
      <form
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
          component={RenderMembers} />

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
    </>
  )
}

const mapStateToProps = state => ({
  initialValues: getUserClubInfo(state),
})

FieldArraysForm = reduxForm({
  form: 'fieldArraysForm',
  warn,
  validate: syncValidator(validationSchema),
})(FieldArraysForm)

FieldArraysForm = connect(
  mapStateToProps,
  { load: userClubInfoSuccess }
)(FieldArraysForm)

export default FieldArraysForm

export const listing = `
import React, { useCallback, useState } from 'react'
import { Field, reduxForm, FieldArray, formValueSelector } from 'redux-form'
import * as yup from 'yup';
import { connect } from 'react-redux'
import { syncValidator } from '../../utils'
import { RenderField } from '../shared'
import { userClubInfo as mockUserClubInfo } from '../../utils'
import { getUserClubInfo } from '../../store/selectors/user';
import { userClubInfoSuccess } from '../../store/actions';
import M from '../FieldArraysForm/Member/Member'

let Member = M

const selector = formValueSelector('fieldArraysForm')

const validationSchema = yup
  .object()
  .shape({
    clubName: yup
      .string()
      .required('Club name is required')
      // eslint-disable-next-line no-template-curly-in-string
      .max(25, 'Must be \${max} characters or less')
      // eslint-disable-next-line no-template-curly-in-string
      .min(2, 'Must be \${min} characters or more'),
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

Member = connect(
  (state, props) => ({
    firstName: selector(state, \`\${props.member}.firstName\`),
    lastName: selector(state, \`\${props.member}.lastName\`),
    hobbies: selector(state, \`\${props.member}.hobbies$\`)
  })
)(Member)

const RenderMembers = ({
  fields,
  maxHobbiesLength,
  meta: { error, warning, submitFailed }
}) => {
  const allFields = fields.getAll()
  const [isDragging, setIsDragging] = useState(false)
  const [hoverIndex, setHoverIndex] = useState(0)
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      setHoverIndex(hoverIndex)
      fields.swap(dragIndex, hoverIndex)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allFields, fields],
  )
  return (
    <ul className="list-group">
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

      <div>
        {fields.map((member, index) =>
          <Member
            highLight={isDragging && index === hoverIndex}
            blockInput={isDragging}
            beginDrag={() => setIsDragging(true)}
            endDrag={() => setIsDragging(false)}
            moveCard={moveCard}
            maxHobbiesLength={maxHobbiesLength}
            member={member}
            fields={fields}
            index={index}
            key={index}
          />)}
      </div>
    </ul>
  )
}

let FieldArraysForm = ({
  handleSubmit,
  maxHobbiesLength,
  pristine,
  reset,
  submitting,
  load
}) => {
  return (
    <>
      <div>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => load(mockUserClubInfo)}>
          Load club info
        </button>
      </div>
      <form
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
          component={RenderMembers} />

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
    </>
  )
}

const mapStateToProps = state => ({
  initialValues: getUserClubInfo(state),
})

FieldArraysForm = reduxForm({
  form: 'fieldArraysForm',
  warn,
  validate: syncValidator(validationSchema),
})(FieldArraysForm)

FieldArraysForm = connect(
  mapStateToProps,
  { load: userClubInfoSuccess }
)(FieldArraysForm)

export default FieldArraysForm
`