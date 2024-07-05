import React from "react";
import { CartContext } from "../../context/CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ItemDetailContainer = ({ product }) => {
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    addToCart(product, 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart(product, 1);
    }
  };

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      {product.images ? (
        <Card.Img variant="top" src={product.images[0]} style={{ height: "auto", objectFit: "cover" }} />
      ) : (
        <Card.Img variant="top" src={product.thumbnail} style={{ height: "auto", objectFit: "cover" }} />
      )}
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>$ {product.price}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button onClick={handleRemove} variant="success" disabled={quantity <= 0}>-</Button>
          <span>{quantity}</span>
          <Button onClick={handleAdd} variant="success">+</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemDetailContainer;
