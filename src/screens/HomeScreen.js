import React, {useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap'
// import products from '../products'
import Product from './Product'
import axios from 'axios'
const HomeScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')

            setProducts(data)
        }

        fetchProducts()
    },[])
  return (
   <>
       <h1>Latest Products</h1>

       <Row>
          {products.map( (item) => {
              return(
              <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                  <Product productedProp={item} />
              </Col>
              )
          })}  
       </Row>

       
   </>
  )
}

export default HomeScreen

// 01. products wali api file per map lagaya hai
// 02. Product (component hai page hai) os k sath product={item} dia hai variable osi name ka takay samjh mai aa sakay or is variable name se props bhi paas kardia Product wale page mai