import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';

const NavMenuMobile = () => {
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
          image: 'https://via.placeholder.com/300x200?text=Morrales',
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
          image: 'https://via.placeholder.com/300x200?text=Mujer',
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
          image: 'https://via.placeholder.com/300x200?text=Hombre',
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
          image: 'https://via.placeholder.com/300x200?text=Niña',
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
          image: 'https://via.placeholder.com/300x200?text=Niño',
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

  return (
    <Accordion>
      {menuItems.map((item, index) => (
        <Accordion.Item eventKey={index} key={index}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              {item.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex}>
                  <strong>{subcategory.title}</strong>
                  <ul className="list-unstyled">
                    {subcategory.items.map((subItem, subItemIndex) => (
                      <li key={subItemIndex}>
                        <Nav.Link href={subItem.href}>{subItem.title}</Nav.Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default NavMenuMobile;