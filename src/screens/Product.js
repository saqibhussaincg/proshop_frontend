import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ productedProp }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${productedProp._id}`}>
        <Card.Img src={productedProp.image} variant='top' />
      </Link>

{/* product naam hai a href="product" jo k app k path mai call ho raha hai ye koi component nahi hai */}

      <Card.Body>
        <Link to={`/product/${productedProp._id}`}>
          <Card.Title as='div'>
          <strong>{productedProp.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating 
            value={productedProp.rating}
            text={`${productedProp.numReviews} reviews`}
          />
        </Card.Text>

   
        <Card.Text as='h3'>
          ${productedProp.price}
        </Card.Text>

      </Card.Body>
    </Card>

  )
}

export default Product

// Anchor Tag Will Replace By LINK

{/* <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a> */}