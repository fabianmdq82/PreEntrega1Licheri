/*import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { useCollectionItems } from "../../hooks/useCollectionItems";

const NavBarComponent = () => {

  const {items} = useCollectionItems("category")
  
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          DISTRIBUIDORA NANCAN
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {items.map((category) => {
                return (
                  <NavDropdown.Item key={category.slug}>
                    <Link to={`/category/${category.slug}`}>{category.name}</Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent />
      </Container>
    </Navbar>
  );
};
export default NavBarComponent;
*/

import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { useCollectionItems } from "../../hooks/useCollectionItems";

const NavBarComponent = () => {
  const { items } = useCollectionItems("category");

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
            DISTRIBUIDORA NANCAN
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {items.map((category) => (
                <NavDropdown.Item as={NavLink} key={category.slug} to={`/category/${category.slug}`}>
                  {category.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent />
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
