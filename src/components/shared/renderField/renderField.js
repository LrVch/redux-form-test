import React from 'react'

export const RenderField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error, warning }
}) => {
  const invalid = touched && error
  const isWarning = touched && warning && !invalid
  const valid = touched && !invalid
  return (
    <div className={(asyncValidating ? 'async-validating' : '') + ' form-group'}>
      <label htmlFor={label}>{label}</label>
      <div>
        <input
          id={label}
          className={(invalid ? ' is-invalid' : ' ') + (valid ? ' is-valid' : ' ') + ' form-control'}
          {...input}
          placeholder={label}
          type={type} />

        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>

        {invalid && <div className="invalid-feedback">{error}</div>}
        {isWarning && <small>{warning}</small>}
      </div>
    </div>
  )
}

export default RenderField