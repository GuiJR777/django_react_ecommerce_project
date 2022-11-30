import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form, ListGroupItem } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'



function CartScreen() {
    function get_formated_item(item){
        return(
            <ListGroupItem key={item.product}>
                <Row>
                    <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>
                        R$ {item.price}
                    </Col>
                    <Col md={3}>
                    <Form.Control
                    as="select"
                    value={item.qty}
                    className="qty-selector"
                    onChange={(e) => dispatch(addToCart(item.product, e.target.value))}
                    >
                        {get_product_count_options(item)}
                    </Form.Control>
                    </Col>
                </Row>
            </ListGroupItem>
        )
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

    const { id } = useParams()
    const productId = id

    const [searchParams, setSearchParams] = useSearchParams();
    const qty = Number(searchParams.get('qty'))

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }

    }, [dispatch, productId, qty])

    return (
        <Row>
            <Col md={8}>
                <h1>Carrinho</h1>
                {cartItems.length === 0 ? (
                    <Message variant='info'>
                        Você não possui itens no seu carrinho no momento,
                        <Link to='/'> volte para loja </Link>
                         e encontre vários produtos irados!
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            get_formated_item(item)
                        ))}
                    </ListGroup>
                )}
            </Col>

            <Col md={4}>

            </Col>
        </Row>
    )
}

export default CartScreen
