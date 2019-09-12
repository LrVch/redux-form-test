import React from 'react'
import { Field, FieldArray } from 'redux-form'
import { RenderField } from '../../shared'
import RenderHobbies from '../RenderHobbies/RenderHobbies'
import './Member.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons'

const Member = ({
  member,
  index,
  fields,
  firstName,
  lastName,
  maxHobbiesLength,
  hobbies
}) => {
  const fieldsLength = fields.length
  return (
    <li className="list-group-item member" key={index}>
      <div className="member__actions">
        {fieldsLength > 1 && <div>
          <button
            className="member__action"
            type="button"
            onClick={() => fields.move(index, index === 0 ? fieldsLength - 1 : index - 1)}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <button
            className="member__action"
            type="button"
            onClick={() => fields.move(index, index === fieldsLength - 1 ? 0 : index + 1)}>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>}

        <button
          className="member__action"
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <h4>Member #{index + 1}
        <div className="border text-secondary px-2 py-2 mt-2" style={{
          color: 'grey',
          fontSize: '12px'
        }}>{firstName} <br /> {lastName}</div>
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

      <div className="mb-2">
        {hobbies && hobbies.map((b, i) =>
          <a
            rel="noopener noreferrer"
            target="_blank"
            key={b + i.toString()}
            href={`https://www.google.com/search?q=${b}`}>
            <span className="badge badge-primary mr-1">{b}</span>
          </a>)}
      </div>

      <FieldArray
        maxHobbiesLength={maxHobbiesLength}
        name={`${member}.hobbies$`}
        component={RenderHobbies} />
    </li>)
}

export default Member