import React from 'react'
import  './ErrorMessage.css'


const ErrorMessage = ({ meta }) =>
  <div className="error-message">{meta.error && meta.touched && 'Please select an option first'}</div>

export default ErrorMessage 

export const listing = `
import React from 'react'
import  './ErrorMessage.css'


const ErrorMessage = ({ meta }) =>
  <div className="error-message">{meta.error && meta.touched && 'Please select an option first'}</div>

export default ErrorMessage 
`