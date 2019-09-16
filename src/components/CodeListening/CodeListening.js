import React from 'react'
import 'prismjs'
import { connect } from 'react-redux'
import PrismCode from 'react-prism'
import './CodeListening.css'
import Spiner from '../shared/Spiner/Spiner'
import { Tabs, Tab } from 'react-bootstrap';

import { getTheme, getPrismShowLoader } from '../../store/selectors'

export const availableThemes = ['prism', 'prism-okaidia']

const CodeListening = ({
  codeListening,
  lang = 'language-javascript',
  showLoader
}) => {
  return (
    <>
      <div className={(showLoader ? 'code-listening__loader_show' : '') +
        " code-listening__loader"}
      >
        <Spiner />
      </div>
      <div className="code-listening">
        {!codeListening.map && <div className="code-listening__full">
          <div className="code-listening__full-inner">
            <PrismCode component="pre" className={lang}>
              {codeListening}
            </PrismCode>
          </div>
        </div>}

        {codeListening.map && <div className="code-listening__full">
          <div className="code-listening__tabs">
            <Tabs transition={false} defaultActiveKey={codeListening[0].title} id="uncontrolled-tab-example">
              {codeListening.map((tab, i) => <Tab key={i} eventKey={tab.title} title={tab.title}>
                <PrismCode component="pre" className={lang}>
                  {tab.code}
                </PrismCode>
              </Tab>)}
            </Tabs>
          </div>
        </div>}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  theme: getTheme(state),
  showLoader: getPrismShowLoader(state)
})

export default connect(
  mapStateToProps
)(CodeListening)
