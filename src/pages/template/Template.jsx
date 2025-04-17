import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import NavMenu from './NavMenu'; // Importar el componente NavMenu
import NavMenuMobile from './NavMenuMobile/NavMenuMobile';
import Footer from './Footer/Footer';
import OrderTable from './OrderTable/OrderTable';

function Template() {
  return (
    <>
      {/* Primer Top Bar */}
      <div className='d-none d-lg-block responsive-menu'>
        <Navbar bg="light" className="py-2 border-bottom">
            <Container>
            <Nav className="me-auto">
                <Nav.Link href="#whatsapp">Escríbenos por WhatsApp</Nav.Link>
                <Nav.Link href="#servicio">Servicio al Cliente</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#travel">Totto Travel</Nav.Link>
                <Nav.Link href="#kids">Totto Kids</Nav.Link>
                <Nav.Link href="#pets">Totto Pets</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
      </div>


      {/* Segundo Top Bar */}
      <Navbar bg="dark" variant="dark" className="py-2">
        <Container className="justify-content-center">
          <Navbar.Text className="text-white text-center">
            NUEVA 🎉 maleta de mano perfecta para niños🧳 ¡<a href="#comprar" className="text-warning">Comprar</a>!
          </Navbar.Text>
        </Container>
      </Navbar>

     {/* Navbar Menu */}
     <Navbar bg="light" expand="lg" className="py-3 border-bottom">
        <Container fluid>
          {/* Toggle Button for Mobile */}
          <div className="d-lg-none">
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
            
              className="offcnanvas-menu"
            >
                {/* Navigation Menu */}       
                <NavMenuMobile />
            </Navbar.Offcanvas>
          </div>
        
          {/* Search Component */}
          <div className='d-none d-lg-block responsive-menu'>
            <InputGroup className="" style={{ maxWidth: '300px' }}>
                <Form.Control
                placeholder="¿Qué estás buscando?"
                aria-label="¿Qué estás buscando?"
                />
                <Button variant="outline-secondary">
                <FaSearch />
                </Button>
            </InputGroup>
          </div>
          
          {/* Logo */}
          <Navbar.Brand href="#home" className="mx-auto">
            <img
              src="https://tottoco.vtexassets.com/assets/vtex.file-manager-graphql/images/c9b14fa0-2088-46ce-84d3-c346c1b9c3fd___f16e2fcf0b496c8ffb133712770052b1.svg"
              alt="Logo"
              style={{ height: '49px' }}
            />
          </Navbar.Brand>

          {/* User and Cart Buttons */}
          <div className="d-flex">
            <Button variant="outline-secondary" className="me-2">
              <FaUser />
            </Button>
            <Button variant="outline-secondary">
              <FaShoppingCart />
            </Button>
          </div>
        </Container>
    </Navbar>
    <div className='d-lg-none d-lg-block responsive-menu'>
        <InputGroup className="">
            <Form.Control
            placeholder="¿Qué estás buscando?"
            aria-label="¿Qué estás buscando?"
            />
            <Button variant="outline-secondary">
            <FaSearch />
            </Button>
        </InputGroup>
    </div>
      {/* Navigation Menu */}
      <div className='d-none d-lg-block responsive-menu'>
        <NavMenu />
      </div>
      

      {/* Contenido principal */}
      <Container className="mt-4">
        <h2>Sección 3 - FrontEnd</h2>
        <h4>Ejercicio 1 - Template Ordenes</h4>
        <OrderTable />
      </Container>
    {/* Footer */}
    <Footer>

    </Footer>
    </>
  );
}

export default Template;