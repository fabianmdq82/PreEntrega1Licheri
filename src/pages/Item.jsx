import React from "react";
import { useProductById } from "../hooks/useProductById";
import { useParams } from "react-router-dom";
import LoaderComponent from "../Components/LoaderComponent/LoaderComponent";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer";


const Item = () => {
  const { id } = useParams();
  const { product, loading } = useProductById(id);

  return loading ? <LoaderComponent /> : <ItemDetailContainer product={product} />;
};

export default Item; 