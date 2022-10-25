import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'


function get_loading_component(){
  return <Loader />
}

function get_error_message(error) {
  switch (error.status) {
    case 404:
      return "Página não encontrada"

    default:
      return `Erro ${error.status}: ${error.statusText}`
  }
}

function get_error_component(error){
  return <Message variant='danger'> { get_error_message(error) } </Message>
}

function get_products_cards(products){
  return <Row>
            {products.map(product => (
                <Col id={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
          </Row>
}


function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div>
      <h1>Ultimos Produtos</h1>
      {
        // SE:
        loading

        // ENTÃO:
        ? get_loading_component()

        // SE NÃO SE:
        : error

        // ENTÃO:
        ? get_error_component(error)

        // CASO CONTRÁRIO:
        : get_products_cards(products)
      }

    </div>
  )
}

export default HomeScreen
