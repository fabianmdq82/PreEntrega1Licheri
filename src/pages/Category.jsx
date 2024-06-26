import React from "react";
import { useParams } from "react-router-dom";
import { useProductsByCategory } from "../hooks/useProductsByCategory";
import ItemListContainerComponent from "../Components/ItemListContainerComponent/ItemListContainerComponent";

const Category = () => {
  const { id } = useParams();
  const { products } = useProductsByCategory(id);
  return <ItemListContainerComponent products={products}/>;
};

export default Category;