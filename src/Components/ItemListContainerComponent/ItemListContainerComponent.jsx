import React from "react";
import "../../Styles/style.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ItemListContainerComponent = ({ products }) => {
  if (products.length === 0) {
    return <div>NO HAY PRODUCTOS EN ESTA CATEGORIA</div>;
  }
  return (
    <div className="itemListContainer d-flex flex-wrap justify-center">
      {products.map((product) => (
        <Card key={product.id} style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Link to={`/item/${product.id}`}>IR A DETALLE</Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ItemListContainerComponent;
