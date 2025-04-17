import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './NavMenu.css'; // Archivo CSS para estilos personalizados

const NavMenu = () => {
  const menuItems = [
    {
      title: 'DESCUBRE',
      href: '/nueva-coleccion',
      image: 'https://tottoco.vtexassets.com/assets/vtex.file-manager-graphql/images/de9ea47d-b95b-4d17-9d7f-dab1d21d5346___a179e589cd287f2823c728159ca95681.webp',
      subcategories: [
        {
          title: 'NUEVA COLECCIÓN',
          href: '/nueva-coleccion',
          items: [
            { title: 'Ver todo', href: '/nueva-coleccion' },
            { title: 'Mujer', href: '/mujer?order=OrderByReleaseDateDESC' },
            { title: 'Viaje', href: '/viaje?order=OrderByReleaseDateDESC' },
            { title: 'Hombre', href: '/hombre?order=OrderByReleaseDateDESC' },
            { title: 'Morrales', href: '/morrales?order=OrderByReleaseDateDESC' },
            { title: 'Niño', href: '/nino?order=OrderByReleaseDateDESC' },
            { title: 'Niña', href: '/nina?order=OrderByReleaseDateDESC' },
          ],
        },
        {
          title: 'LOS FAVORITOS',
          href: '/lo-mas-vendido',
          items: [
            { title: 'Eventos y festivales', href: '/eventos-y-festivales?order=OrderByReleaseDateDESC' },
            { title: 'Para llevar contigo', href: '/2491?map?order=OrderByReleaseDateDESC' },
            { title: 'Mejor calificados', href: '/productos-mejor-calificados?order=OrderByReleaseDateDESC' },
            { title: 'Más vendidos', href: '/lo-mas-vendido?order=OrderByReleaseDateDESC' },
            { title: 'Viaja ligero', href: '/lowcost-travel?order=' },
          ],
        },
        {
          title: 'COLECCIONES',
          href: '/adelaide',
          items: [
            { title: 'Adelaide', href: '/adelaide' },
            { title: 'Cuero', href: '/coleccion-cuero' },
            { title: 'Bazy', href: '/maletas/coleccion-maletas-bazy' },
            { title: 'Nomad', href: '/maletas/coleccion-maletas-nomad' },
            { title: 'Trip', href: '/maletas/coleccion-maletas-trip' },
          ],
        },
      ],
    },
    {
      title: 'Morrales',
      href: '/morrales?order=OrderByReleaseDateDESC',
      image: 'https://tottoco.vtexassets.com/assets/vtex.file-manager-graphql/images/ab87b83f-ff3c-4e3e-8551-4523b8edb969___9657dee4f45c910a4965de218ed07a9c.webp',
      subcategories: [
        {
          title: 'NUEVA COLECCIÓN',
          href: '/nueva-coleccion',
          items: [
            { title: 'Ver todo', href: '/nueva-coleccion' },
            { title: 'Mujer', href: '/mujer?order=OrderByReleaseDateDESC' },
            { title: 'Viaje', href: '/viaje?order=OrderByReleaseDateDESC' },
            { title: 'Hombre', href: '/hombre?order=OrderByReleaseDateDESC' },
            { title: 'Morrales', href: '/morrales?order=OrderByReleaseDateDESC' },
            { title: 'Niño', href: '/nino?order=OrderByReleaseDateDESC' },
            { title: 'Niña', href: '/nina?order=OrderByReleaseDateDESC' },
          ],
        },
        {
          title: 'LOS FAVORITOS',
          href: '/lo-mas-vendido',
          items: [
            { title: 'Eventos y festivales', href: '/eventos-y-festivales?order=OrderByReleaseDateDESC' },
            { title: 'Para llevar contigo', href: '/2491?map?order=OrderByReleaseDateDESC' },
            { title: 'Mejor calificados', href: '/productos-mejor-calificados?order=OrderByReleaseDateDESC' },
            { title: 'Más vendidos', href: '/lo-mas-vendido?order=OrderByReleaseDateDESC' },
            { title: 'Viaja ligero', href: '/lowcost-travel?order=' },
          ],
        },
        {
          title: 'COLECCIONES',
          href: '/adelaide',
          items: [
            { title: 'Adelaide', href: '/adelaide' },
            { title: 'Cuero', href: '/coleccion-cuero' },
            { title: 'Bazy', href: '/maletas/coleccion-maletas-bazy' },
            { title: 'Nomad', href: '/maletas/coleccion-maletas-nomad' },
            { title: 'Trip', href: '/maletas/coleccion-maletas-trip' },
          ],
        },
      ],
    },
    {
      title: 'Mujer',
      href: '/mujer?order=OrderByReleaseDateDESC',
      image: 'https://tottoco.vtexassets.com/assets/vtex.file-manager-graphql/images/de9ea47d-b95b-4d17-9d7f-dab1d21d5346___a179e589cd287f2823c728159ca95681.webp',
      subcategories: [
        {
          title: 'NUEVA COLECCIÓN',
          href: '/nueva-coleccion',
          items: [
            { title: 'Ver todo', href: '/nueva-coleccion' },
            { title: 'Mujer', href: '/mujer?order=OrderByReleaseDateDESC' },
            { title: 'Viaje', href: '/viaje?order=OrderByReleaseDateDESC' },
            { title: 'Hombre', href: '/hombre?order=OrderByReleaseDateDESC' },
            { title: 'Morrales', href: '/morrales?order=OrderByReleaseDateDESC' },
            { title: 'Niño', href: '/nino?order=OrderByReleaseDateDESC' },
            { title: 'Niña', href: '/nina?order=OrderByReleaseDateDESC' },
          ],
        },
        {
          title: 'LOS FAVORITOS',
          href: '/lo-mas-vendido',
          items: [
            { title: 'Eventos y festivales', href: '/eventos-y-festivales?order=OrderByReleaseDateDESC' },
            { title: 'Para llevar contigo', href: '/2491?map?order=OrderByReleaseDateDESC' },
            { title: 'Mejor calificados', href: '/productos-mejor-calificados?order=OrderByReleaseDateDESC' },
            { title: 'Más vendidos', href: '/lo-mas-vendido?order=OrderByReleaseDateDESC' },
            { title: 'Viaja ligero', href: '/lowcost-travel?order=' },
          ],
        },
        {
          title: 'COLECCIONES',
          href: '/adelaide',
          items: [
            { title: 'Adelaide', href: '/adelaide' },
            { title: 'Cuero', href: '/coleccion-cuero' },
            { title: 'Bazy', href: '/maletas/coleccion-maletas-bazy' },
            { title: 'Nomad', href: '/maletas/coleccion-maletas-nomad' },
            { title: 'Trip', href: '/maletas/coleccion-maletas-trip' },
          ],
        },
      ],
    },
    {
      title: 'Hombre',
      href: '/hombre?order=OrderByReleaseDateDESC',
      image: 'https://tottoco.vtexassets.com/assets/vtex.file-manager-graphql/images/ab87b83f-ff3c-4e3e-8551-4523b8edb969___9657dee4f45c910a4965de218ed07a9c.webp',
      subcategories: [
        {
          title: 'NUEVA COLECCIÓN',
          href: '/nueva-coleccion',
          items: [
            { title: 'Ver todo', href: '/nueva-coleccion' },
            { title: 'Mujer', href: '/mujer?order=OrderByReleaseDateDESC' },
            { title: 'Viaje', href: '/viaje?order=OrderByReleaseDateDESC' },
            { title: 'Hombre', href: '/hombre?order=OrderByReleaseDateDESC' },
            { title: 'Morrales', href: '/morrales?order=OrderByReleaseDateDESC' },
            { title: 'Niño', href: '/nino?order=OrderByReleaseDateDESC' },
            { title: 'Niña', href: '/nina?order=OrderByReleaseDateDESC' },
          ],
        },
        {
          title: 'LOS FAVORITOS',
          href: '/lo-mas-vendido',
          items: [
            { title: 'Eventos y festivales', href: '/eventos-y-festivales?order=OrderByReleaseDateDESC' },
            { title: 'Para llevar contigo', href: '/2491?map?order=OrderByReleaseDateDESC' },
            { title: 'Mejor calificados', href: '/productos-mejor-calificados?order=OrderByReleaseDateDESC' },
            { title: 'Más vendidos', href: '/lo-mas-vendido?order=OrderByReleaseDateDESC' },
            { title: 'Viaja ligero', href: '/lowcost-travel?order=' },
          ],
        },
        {
          title: 'COLECCIONES',
          href: '/adelaide',
          items: [
            { title: 'Adelaide', href: '/adelaide' },
            { title: 'Cuero', href: '/coleccion-cuero' },
            { title: 'Bazy', href: '/maletas/coleccion-maletas-bazy' },
            { title: 'Nomad', href: '/maletas/coleccion-maletas-nomad' },
            { title: 'Trip', href: '/maletas/coleccion-maletas-trip' },
          ],
        },
      ],
    },
    {
      title: 'Niña',
      href: '/nina?order=OrderByReleaseDateDESC',
      image: 'https://tottoco.vtexassets.com/assets/vtex.file-manager-graphql/images/de9ea47d-b95b-4d17-9d7f-dab1d21d5346___a179e589cd287f2823c728159ca95681.webp',
      subcategories: [
        {
          title: 'NUEVA COLECCIÓN',
          href: '/nueva-coleccion',
          items: [
            { title: 'Ver todo', href: '/nueva-coleccion' },
            { title: 'Mujer', href: '/mujer?order=OrderByReleaseDateDESC' },
            { title: 'Viaje', href: '/viaje?order=OrderByReleaseDateDESC' },
            { title: 'Hombre', href: '/hombre?order=OrderByReleaseDateDESC' },
            { title: 'Morrales', href: '/morrales?order=OrderByReleaseDateDESC' },
            { title: 'Niño', href: '/nino?order=OrderByReleaseDateDESC' },
            { title: 'Niña', href: '/nina?order=OrderByReleaseDateDESC' },
          ],
        },
        {
          title: 'LOS FAVORITOS',
          href: '/lo-mas-vendido',
          items: [
            { title: 'Eventos y festivales', href: '/eventos-y-festivales?order=OrderByReleaseDateDESC' },
            { title: 'Para llevar contigo', href: '/2491?map?order=OrderByReleaseDateDESC' },
            { title: 'Mejor calificados', href: '/productos-mejor-calificados?order=OrderByReleaseDateDESC' },
            { title: 'Más vendidos', href: '/lo-mas-vendido?order=OrderByReleaseDateDESC' },
            { title: 'Viaja ligero', href: '/lowcost-travel?order=' },
          ],
        },
        {
          title: 'COLECCIONES',
          href: '/adelaide',
          items: [
            { title: 'Adelaide', href: '/adelaide' },
            { title: 'Cuero', href: '/coleccion-cuero' },
            { title: 'Bazy', href: '/maletas/coleccion-maletas-bazy' },
            { title: 'Nomad', href: '/maletas/coleccion-maletas-nomad' },
            { title: 'Trip', href: '/maletas/coleccion-maletas-trip' },
          ],
        },
      ],
    },
    {
      title: 'Niño',
      href: '/nino?order=OrderByReleaseDateDESC',
      image: 'https://tottoco.vtexassets.com/assets/vtex.file-manager-graphql/images/ab87b83f-ff3c-4e3e-8551-4523b8edb969___9657dee4f45c910a4965de218ed07a9c.webp',
      subcategories: [
        {
          title: 'NUEVA COLECCIÓN',
          href: '/nueva-coleccion',
          items: [
            { title: 'Ver todo', href: '/nueva-coleccion' },
            { title: 'Mujer', href: '/mujer?order=OrderByReleaseDateDESC' },
            { title: 'Viaje', href: '/viaje?order=OrderByReleaseDateDESC' },
            { title: 'Hombre', href: '/hombre?order=OrderByReleaseDateDESC' },
            { title: 'Morrales', href: '/morrales?order=OrderByReleaseDateDESC' },
            { title: 'Niño', href: '/nino?order=OrderByReleaseDateDESC' },
            { title: 'Niña', href: '/nina?order=OrderByReleaseDateDESC' },
          ],
        },
        {
          title: 'LOS FAVORITOS',
          href: '/lo-mas-vendido',
          items: [
            { title: 'Eventos y festivales', href: '/eventos-y-festivales?order=OrderByReleaseDateDESC' },
            { title: 'Para llevar contigo', href: '/2491?map?order=OrderByReleaseDateDESC' },
            { title: 'Mejor calificados', href: '/productos-mejor-calificados?order=OrderByReleaseDateDESC' },
            { title: 'Más vendidos', href: '/lo-mas-vendido?order=OrderByReleaseDateDESC' },
            { title: 'Viaja ligero', href: '/lowcost-travel?order=' },
          ],
        },
        {
          title: 'COLECCIONES',
          href: '/adelaide',
          items: [
            { title: 'Adelaide', href: '/adelaide' },
            { title: 'Cuero', href: '/coleccion-cuero' },
            { title: 'Bazy', href: '/maletas/coleccion-maletas-bazy' },
            { title: 'Nomad', href: '/maletas/coleccion-maletas-nomad' },
            { title: 'Trip', href: '/maletas/coleccion-maletas-trip' },
          ],
        },
      ],
    },
  ];

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <Navbar bg="light" className="border-bottom p-0">
      <Container fluid>
        <Nav className="mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="menu-item"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Nav.Link
                href={item.href}
                className="text-dark px-3 text-uppercase fw-bold"
                style={{ whiteSpace: 'nowrap' }}
                onMouseEnter={() => handleMouseEnter(index)} // Mantener activo
                // onMouseLeave={handleMouseLeave} // Desactivar al salir
              >
                {item.title}
              </Nav.Link>
              {item.subcategories && activeMenu === index && (
                <div 
                className="submenu position-absolute bg-white shadow p-3 w-100"
                onMouseEnter={() => handleMouseEnter(index)} // Mantener activo
                // onMouseLeave={handleMouseLeave} // Desactivar al salir
                >
                  <div className="d-flex justify-content-around">
                    {item.image && (
                      <div className="me-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{ maxWidth: '300px', borderRadius: '4px' }}
                        />
                      </div>
                    )}
                    {item.subcategories.map((subcategory, subIndex) => (
                      <div key={subIndex} className="me-4">
                        <a href={subcategory.href} className="text-dark fw-bold d-block mb-2">
                          {subcategory.title}
                        </a>
                        <ul className="list-unstyled">
                          {subcategory.items.map((subItem, subItemIndex) => (
                            <li key={subItemIndex} className="py-1">
                              <a href={subItem.href} className="text-dark text-decoration-none">
                                {subItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavMenu;