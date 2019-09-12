import React, { useRef, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import MemberTypes from './MemberTypes'
import { Field, FieldArray } from 'redux-form'
import { RenderField } from '../../shared'
import RenderHobbies from '../RenderHobbies/RenderHobbies'
import './Member.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  isMobile
} from "react-device-detect";

const Member = ({
  member,
  index,
  fields,
  firstName,
  lastName,
  maxHobbiesLength,
  hobbies,
  moveCard,
  endDrag,
  beginDrag,
  blockInput,
  highLight
}) => {
  const fieldsLength = fields.length
  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: MemberTypes.MEMBER,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [collectedProps, drag] = useDrag({
    item: { type: MemberTypes.MEMBER, index },
    collect: monitor => {
      return {
        isDragging: monitor.isDragging(),
      }
    },
    end: () => endDrag(false),
    begin: () => beginDrag(true)
  })
  const { isDragging } = collectedProps
  const opacity = isDragging ? 1 : 1
  fieldsLength > 1 && drag(drop(ref))

  return (
    <div ref={ref} style={{ opacity }}>
      <li
        className={(highLight ? 'member_highLight' : '') + ' list-group-item member '} key={index}>
        <div className={(isMobile ? 'member__actions_visible' : '') +
          ' member__actions '
        }>
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
        <div style={{ position: 'relative' }}>
          <Field
            blockInput={blockInput}
            name={`${member}.firstName`}
            type="text"
            component={RenderField}
            label="First Name"
          />
          <Field
            blockInput={blockInput}
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
            blockInput={isDragging}
            maxHobbiesLength={maxHobbiesLength}
            name={`${member}.hobbies$`}
            component={RenderHobbies} />
        </div>
      </li>
    </div>
  )
}

export default Member