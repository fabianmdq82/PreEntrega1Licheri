import React from 'react'
import { getAllProductsById } from '../services/products';

export const useProductsById = (id) => {
    const [product, setProduct] = React.useState({});
    React.useEffect(() => {
        getAllProductsById(id)
        .then((res) => {
            setProduct(res.data);
        })
        .catch((error) => {
            console.error(error);
        })
    }, []);
    return { product };
}