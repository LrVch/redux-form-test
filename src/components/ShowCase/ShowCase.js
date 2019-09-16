import React, { useState } from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import './ShowCase.css'
import { connect } from 'react-redux'
import ShowCaseButton from '../shared/ShowCaseButton/ShowCaseButton';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons'
import { getTheme, getPrismShowLoader } from '../../store/selectors';
import { uiChangeThemeInDome } from '../../store/actions';

const ShowCase = ({
  component,
  codeListining,
  onChangeTheme,
  title,
  theme,
  showLoader,
  children
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
    onChangeTheme(theme)
  }

  return (
    <div>
      <div>
        <Modal
          className="show-case"
          dialogClassName="show-case__dialog"
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Container fluid>
              <Row>
                <Col xs={11}>
                  <Modal.Title>{title}</Modal.Title>
                </Col>
                <Col>
                  <div className="show-case__actions">
                    <ShowCaseButton
                      disabled={showLoader}
                      onClick={() => onChangeTheme(theme === 'prism' ? 'prism-okaidia' : 'prism')}
                      theme={theme}
                      icon={faFillDrip}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Header>
          <Modal.Body>
            <div className="show-case__content">
              <div className="show-case__col">
                <div className="show-case__body">
                  {children}
                  {component}
                </div>
              </div>
              <div className="show-case__col">
                <div className="show-case__body show-case__body_listening">
                  {codeListining}
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {children}
      {!show && component}
      <hr />
      <div>
        <Button variant="secondary" onClick={handleShow}>Expand</Button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  theme: getTheme(state),
  showLoader: getPrismShowLoader(state)
})

const mapStateToDispatch = dispatch => ({
  onChangeTheme: theme => dispatch(uiChangeThemeInDome(theme))
})
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(ShowCase)
