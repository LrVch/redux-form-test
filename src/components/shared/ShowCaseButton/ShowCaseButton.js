import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ShowCaseButton.css'

const ShowCaseButton = ({ disabled, theme, text, icon, onClick = () => { } }) => {
  return (
    <button
      style={{ opacity: disabled ? 0.5 : 1 }}
      disabled={disabled}
      className={`show-case-btn_${theme} show-case-btn`}
      onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {text && (' ' + text)}
    </button>
  )
}

export default ShowCaseButton
