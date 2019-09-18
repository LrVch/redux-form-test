import React from 'react'
import { Tabs, Tab, Nav } from 'react-bootstrap'
import './SharedContent.css'
import CodeListening from '../CodeListening/CodeListening'

import ErrorMessage, { listing as ErrorMessageListing } from '../shared/ErrorMessage/ErrorMessage'
import renderFiled, { listing as renderFiledListing } from '../shared/renderField/renderField'
import * as validators from '../../utils/validators'

// store

const renderCode = components => {
  console.log(components)
  return (
    <div key={Math.random()} className="tab-root">
      <Tab.Container key={Math.random()} transition={false} defaultActiveKey={components[0].eventKey}>
        {components.map((comp, i) => {
          console.log(comp)
          if (comp.code.map) {
            return renderCode(comp.code)
          }

          return (
            <div key={i + Math.random()}>
              <Nav>
                <Nav.Item>
                  <Nav.Link eventKey={comp.eventKey}>{comp.title}</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane key={i + Math.random()} eventKey={comp.eventKey} title={comp.title}>
                  {/* <div key={i + Math.random()} className="tab-container"> */}
                  <CodeListening codeListening={comp.code} />
                  {/* </div> */}
                </Tab.Pane >
              </Tab.Content>
            </div>
          )
        })}
      </Tab.Container>
    </div>
  )
}

const SharedContent = () => {
  const components = [{
    title: 'ErrorMessage',
    code: ErrorMessageListing,
    eventKey: 'ErrorMessage'
  },
  {
    title: 'renderFiled',
    code: [
      {
        title: 'validators2',
        code: validators.listing,
        eventKey: 'validators2'
      },
      {
        title: 'validators2',
        code: validators.listing,
        eventKey: 'validators2'
      }
    ],
    eventKey: 'renderFiled'
  },
  {
    title: 'validators',
    code: validators.listing,
    eventKey: 'validators'
  }]
  return (
    <div className="shared-content">

      {/* {components.map((tab, i) => (
          <Tab key={i} eventKey={tab.eventKey} title={tab.title}>
            <div>
              <CodeListening codeListening={tab.code} />
            </div>
          </Tab>
        ))} */}
      {renderCode(components)}
      {/* </Tabs> */}
    </div >
  )
}

export default SharedContent
