import React from 'react'

export const RenderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  const invalid = touched && error
  const isWarning = touched && warning && !invalid
  const valid = touched && !invalid
  return (
    <div className='form-group'>
      <label htmlFor={label}>{label}</label>
      <div>
        <input
          id={label}
          className={(invalid ? ' is-invalid' : ' ') + (valid ? ' is-valid' : ' ') + ' form-control'}
          {...input}
          placeholder={label}
          type={type} />

        {invalid && <div className="invalid-feedback">{error}</div>}
        {isWarning && <small>{warning}</small>}
      </div>
    </div>
  )
}

export default RenderField