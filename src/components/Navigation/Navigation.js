import React from 'react';
import { Navbar ,NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from "reactstrap";


const Navigation = () => {
  return (  
    <div>
      <Navbar
        className='background'
        color="dark"
        container="xl"
        dark
        expand="lg"
        fixed="top"
        light
      >
        <NavbarBrand href="/">
          Abraham Solis
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/components/">
                About me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Contact Me
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  
  );
};

export default Navigation;
