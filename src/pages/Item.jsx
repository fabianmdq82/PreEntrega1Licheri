import React from 'react'
import { useProductsById } from '../hooks/useProductsById'
import { useParams } from 'react-router-dom';
import ItemDetailContainerComponent from '../Components/ItemDetailContainerComponent/ItemDetailContainerComponent';
ItemDetailContainerComponent

const Item = () => {
  const {id} = useParams();
  const {product} = useProductsById(id);
  return (
    <ItemDetailContainerComponent product={product}/>
  )
}

export default Item