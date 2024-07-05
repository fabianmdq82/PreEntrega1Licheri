import React from "react";

import { useCollectionItems } from "../hooks/useCollectionItems";

import ItemListContainerComponent from "../Components/ItemListContainerComponent/ItemListContainerComponent";
import LoaderComponent from "../Components/LoaderComponent/LoaderComponent";

const Home = () => {
  const { items, loading } = useCollectionItems("products");

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainerComponent products={items} />
  );
};

export default Home;