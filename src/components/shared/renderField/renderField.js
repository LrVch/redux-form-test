import React, { useEffect } from 'react'

export const RenderField = ({
  children,
  input,
  label,
  meta: { asyncValidating, touched, error, warning },
  noValidate,
  onDestoy,
  type,
  blockInput
}) => {
  const isCheckRadio = /radio|checkbox/.test(type)
  const isSelect = type === 'select'
  const isInput = /file|password|^text$|email|number|radio|checkbox/.test(type)
  const isRadio = type === 'radio'
  const isTextArea = type === 'textarea'
  const invalid = !noValidate && touched && error
  const isWarning = !noValidate && touched && warning && !invalid
  const valid = !noValidate && touched && !invalid
  const id = Math.random(32).toString().slice(2)

  useEffect(() => {
    return () => {
      onDestoy && onDestoy()
    }
  }, [onDestoy])

  return (
    <div className={
      (asyncValidating ? ' async-validating ' : '') +
      ' form-group ' +
      (isCheckRadio ? ' form-check ' : '')
    }>
      {!isCheckRadio && <label htmlFor={id}>{label}</label>}
      <div style={{ position: 'relative' }}>
        {blockInput && <div style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 9999,
        }}></div>}
        {isInput && <input
          id={id}
          className={
            (!isRadio && invalid ? ' is-invalid ' : ' ') +
            (!isRadio && valid ? ' is-valid ' : ' ') +
            (!isCheckRadio ? ' form-control ' : ' form-check-input ') + 
            ' bg-transparent '
          }
          {...input}
          placeholder={label}
          type={type} />}

        {isSelect && <select
          id={id}
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
          htmlFor={id}>{label}</label>
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

export const listing = `
import React, { useEffect } from 'react'

export const RenderField = ({
  children,
  input,
  label,
  meta: { asyncValidating, touched, error, warning },
  noValidate,
  onDestoy,
  type,
  blockInput
}) => {
  const isCheckRadio = /radio|checkbox/.test(type)
  const isSelect = type === 'select'
  const isInput = /file|password|^text$|email|number|radio|checkbox/.test(type)
  const isRadio = type === 'radio'
  const isTextArea = type === 'textarea'
  const invalid = !noValidate && touched && error
  const isWarning = !noValidate && touched && warning && !invalid
  const valid = !noValidate && touched && !invalid
  const id = Math.random(32).toString().slice(2)

  useEffect(() => {
    return () => {
      onDestoy && onDestoy()
    }
  }, [onDestoy])

  return (
    <div className={
      (asyncValidating ? ' async-validating ' : '') +
      ' form-group ' +
      (isCheckRadio ? ' form-check ' : '')
    }>
      {!isCheckRadio && <label htmlFor={id}>{label}</label>}
      <div style={{ position: 'relative' }}>
        {blockInput && <div style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 9999,
        }}></div>}
        {isInput && <input
          id={id}
          className={
            (!isRadio && invalid ? ' is-invalid ' : ' ') +
            (!isRadio && valid ? ' is-valid ' : ' ') +
            (!isCheckRadio ? ' form-control ' : ' form-check-input ') + 
            ' bg-transparent '
          }
          {...input}
          placeholder={label}
          type={type} />}

        {isSelect && <select
          id={id}
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
          htmlFor={id}>{label}</label>
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
`