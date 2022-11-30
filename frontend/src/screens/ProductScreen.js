import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate, createSearchParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import { listProductDetails } from '../actions/productActions'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'


function get_loading_component() {
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

function get_error_component(error) {
    return <Message variant='danger'> {get_error_message(error)} </Message>
}

function get_product_count_options(product) {
    var in_stock_values = [...Array(product.count_in_stock).keys()]
    var options = in_stock_values.map(
        (value) => (
            <option value={value + 1}>
                {value + 1}
            </option>
        )
    )

    return options
}

function get_product_details_page(product, qty, setQty, add_to_cart_handler) {
    return <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant="flush">

                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} number_of_reviews={product.number_of_reviews} color={'#f8e825'} />
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
                                            product.count_in_stock > 1
                                                ? "Em Estoque"
                                                : "Produto Esgotado"
                                        }
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {product.count_in_stock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Quantidade</Col>
                                        <Col xs='auto' className='my-1'>
                                            <Form.Control
                                            as="select"
                                            value={qty}
                                            className="qty-selector"
                                            onChange={(e) => setQty(e.target.value)}
                                            >
                                                {get_product_count_options(product)}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}

                            <ListGroup.Item>
                                <Button
                                onClick={add_to_cart_handler}
                                className='btn-block'
                                disabled={product.count_in_stock === 0}
                                type='button'
                                >
                                    <i className="fas fa-shopping-cart"></i> Adicionar ao Carrinho
                                </Button>
                            </ListGroup.Item>

                        </ListGroup>

                    </Card>
                </Col>
            </Row>
}


function ProductScreen() {
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()
    const product_id_in_query = useParams().id
    const navigate = useNavigate()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(product_id_in_query))
    }, [dispatch    ])

    const params = {qty:qty}
    const add_to_cart_handler = () => {
        navigate({
            pathname: `/cart/${product_id_in_query}`,
            search: `?${createSearchParams(params)}`,
          });
    }

    return (
        <div>
            <Link to="/" className='btn btn-light my-3'>Voltar</Link>
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
                : get_product_details_page(product, qty, setQty, add_to_cart_handler)
            }
        </div>
    )
}

export default ProductScreen
