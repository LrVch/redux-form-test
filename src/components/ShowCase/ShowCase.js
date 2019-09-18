import React, { useState } from 'react'
import { Modal, Button, Container, Row, Col, ButtonGroup } from 'react-bootstrap';
import './ShowCase.css'
import { connect } from 'react-redux'
import ShowCaseButton from '../shared/ShowCaseButton/ShowCaseButton';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons'
import { getTheme, getPrismShowLoader } from '../../store/selectors';
import { uiChangeThemeInDome } from '../../store/actions';
import SharedContent from '../SharedContent/SharedContent';

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
  const [content, setContent] = useState(1)

  const handleClose = () => {
    setShow(false)
    setContent(0)
  }
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
              <div className={(content === 0 ? 'show-case__container_visible' : '') + ' show-case__container '}>
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
              <div className={(content === 1 ? 'show-case__container_visible' : '') + ' show-case__container '}>
                <SharedContent/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="show-case__footer-actions">
              <ButtonGroup>
                <Button onClick={() => setContent(0)} variant={content === 0 ? 'info' : 'secondary'}>Components</Button>
                <Button onClick={() => setContent(1)} variant={content === 1 ? 'info' : 'secondary'}>Shared</Button>
              </ButtonGroup>
              <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </div>
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
