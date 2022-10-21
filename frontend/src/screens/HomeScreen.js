import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

import products from '../products';

function HomeScreen() {
  return (
    <div>
      <Row>
        {products.map(product => (
            <Col id={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
