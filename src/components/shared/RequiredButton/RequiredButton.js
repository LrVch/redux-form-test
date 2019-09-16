import React from 'react'
import { connect } from 'react-redux'
import { getUserContext } from '../../../store/selectors'
import { userToggleRequiredNickname } from '../../../store/actions'

const RequiredButton = ({context, toggleNickNameRequired}) => {
  const { requiredNickname } = context
  return (
    <button
      onClick={() => toggleNickNameRequired(!requiredNickname)}
      type="submit"
      className="btn btn-secondary">
      Toggle nickname required "{requiredNickname ? 'required' : 'not required'}"
    </button>
  )
}

export default connect(
  state => ({
    context: getUserContext(state)
  }),
  dispatch => ({
    toggleNickNameRequired: value => dispatch(userToggleRequiredNickname(value))
  })
)(RequiredButton)