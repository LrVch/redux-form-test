import React from 'react'

export const RenderField = ({
  children,
  input,
  label,
  meta: { asyncValidating, touched, error, warning },
  noValidate,
  type,
}) => {
  const isCheckRadio = /radio|checkbox/.test(type)
  const isSelect = type === 'select'
  const isInput = /file|password|^text$|email|number|radio|checkbox/.test(type)
  const isRadio = type === 'radio'
  const isTextArea = type === 'textarea'
  const invalid = !noValidate && touched && error
  const isWarning = !noValidate && touched && warning && !invalid
  const valid = !noValidate && touched && !invalid
  return (
    <div className={
      (asyncValidating ? ' async-validating ' : '') +
      ' form-group ' +
      (isCheckRadio ? ' form-check ' : '')
    }>
      {!isCheckRadio && <label htmlFor={label}>{label}</label>}
      <div>
        {isInput && <input
          id={label}
          className={
            (!isRadio && invalid ? ' is-invalid ' : ' ') +
            (!isRadio && valid ? ' is-valid ' : ' ') +
            (!isCheckRadio ? ' form-control ' : ' form-check-input ')}
          {...input}
          placeholder={label}
          type={type} />}

        {isSelect && <select
          id={label}
          className={
            (invalid ? ' is-invalid ' : ' ') +
            (valid ? ' is-valid ' : ' ') +
            ' form-control '}
          {...input}
        >
          {children}
        </select>}

        {isTextArea && <textarea
          id={label}
          className={
            (invalid ? ' is-invalid ' : ' ') +
            (valid ? ' is-valid ' : ' ') +
            ' form-control '}
          {...input}
        ></textarea>}

        {isCheckRadio && <label
          className="form-check-label"
          htmlFor={label}>{label}</label>
        }

        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>

        {!isRadio && invalid && <div className="invalid-feedback">{error}</div>}
        {!isRadio && isWarning && <small>{warning}</small>}
      </div>
    </div>
  )
}

export default RenderField