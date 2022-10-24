import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const products_endpoint = '/api/products/'

function HomeScreen() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts(){
      const { data } = await axios.get(products_endpoint)
      setProducts(data)
    }

    fetchProducts()

  }, [])

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
