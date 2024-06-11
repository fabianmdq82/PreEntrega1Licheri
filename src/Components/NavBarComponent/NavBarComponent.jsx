import React from 'react'
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { getAllCategories } from '../../services/products';

const NavBarComponent = () => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand><Link to="/">DISTRIBUIDORA NANCAN</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home"><Link to= "/">Home</Link></Nav.Link>
          <Nav.Link href="#link">Juguetes</Nav.Link>
          <NavDropdown title="Marcas" id="basic-nav-dropdown">
            {categories.map((category) => {
              return (
                <NavDropdown.Item key={category.slug}>
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
                </NavDropdown.Item>
              );
              })}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <CartWidgetComponent/>
    </Container>
  </Navbar>
  )
}

export default NavBarComponent