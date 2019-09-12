import React from 'react'
import { Field } from 'redux-form'
import { RenderField } from '../../shared'


const RenderHobbies = ({ fields, maxHobbiesLength, meta: { error, warning } }) => {
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

export default RenderHobbies