import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <fotter>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; LojaProfiça
          </Col>
        </Row>
      </Container>
    </fotter>
  )
}

export default Footer
