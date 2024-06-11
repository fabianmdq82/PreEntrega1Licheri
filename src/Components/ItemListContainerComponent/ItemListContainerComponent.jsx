
import React from 'react'
//import { useProducts } from '../../hooks/useProducts';
import Link from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemListContainerComponent = ({products}) => {
  return products.map ((product) => {
    return(
      <Card key={product.id} style={{ width: '18rem', margin: 10 }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Link to={`/item/${product.id}`}>Detalle</Link>
      </Card.Body>
    </Card>
    )   
  }  
  )
}

export default ItemListContainerComponent