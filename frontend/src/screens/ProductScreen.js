import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'

import Rating from '../components/Rating'
import axios from 'axios'


const product_endpoint = '/api/products/'

function ProductScreen() {
    const product_id_in_query = useParams().id
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProduct(){
        const { data } = await axios.get(`${product_endpoint}${product_id_in_query}`)
        setProduct(data)
        }

        fetchProduct()

    }, [])

    return (
        <div>
            <Link to="/" className='btn btn-light my-3'>Voltar</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant="flush">

                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} number_of_reviews={product.numReviews} color={'#f8e825'}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h4>R$ {product.price}</h4>
                        </ListGroup.Item>

                        <ListGroup.Item  >
                            {product.description}
                        </ListGroup.Item>

                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>

                        <ListGroup variant='flush'>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Preço:</Col>
                                    <Col>
                                        <strong>R$ {product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                        </ListGroup>

                        <ListGroup variant='flush'>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {
                                            product.countInStock > 1
                                            ? "Em Estoque"
                                            : "Produto Esgotado"
                                        }
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className='btn-block' disabled={product.countInStock === 0} type='button' ><i className="fas fa-shopping-cart"></i> Adicionar ao Carrinho</Button>
                            </ListGroup.Item>

                        </ListGroup>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
