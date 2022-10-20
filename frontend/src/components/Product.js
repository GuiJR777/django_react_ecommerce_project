import React from 'react'
import { Card } from 'react-bootstrap'

function Product({ product }) {
    const rating_word_singular = "avaliação"
    const rating_word_plural = "avaliações"

    var rating_word = ""
    if (product.numReviews > 1){
        rating_word=rating_word_plural
    }else{
        rating_word=rating_word_singular
    }

    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </a>

            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title>
                        <strong>
                            {product.name}
                        </strong>
                    </Card.Title>
                </a>

                <Card.Text as='div' >
                    <div className='my-3' >
                        {product.rating} estrelas de {product.numReviews} {rating_word}
                    </div>
                </Card.Text>

                <Card.Text as="h3" >
                    R${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
    }

export default Product
