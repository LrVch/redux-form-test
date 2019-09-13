import React from 'react'
import 'prismjs'
import { connect } from 'react-redux'
import PrismCode from 'react-prism'
import './CodeListening.css'
import Spiner from '../shared/Spiner/Spiner'

import { getTheme, getPrismShowLoader } from '../../store/selectors'

export const availableThemes = ['prism', 'prism-okaidia']

const CodeListening = ({
  codeListening,
  lang = 'language-javascript',
  showLoader }) => {
  return (
    <>
    <Spiner/>
      <div className={(showLoader ? 'code-listening__loader_show' : '') +
        " code-listening__loader"}
      >
        <Spiner/>
      </div>
      <div className="code-listening">
        <PrismCode component="pre" className={lang}>
          {codeListening}
        </PrismCode>
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
