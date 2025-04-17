import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Section2 from './secciones/seccion2/Seccion2';
import Section3 from './secciones/seccion3/Seccion3'
import Section4 from './secciones/seccion4/Seccion4.tsx'
function Section1() {
  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-primary">Sección 1: Preguntas</h1>

      {/* Pregunta 1 */}
      <Card className="mb-4">
        <Card.Header as="h5">1. ¿Cuáles son los pasos básicos para crear un producto en VTEX IO, desde la configuración hasta la publicación?</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>1. Ir a <strong>Catálogo > Productos y SKUs</strong>.</ListGroup.Item>
            <ListGroup.Item>2. Hacer clic en <strong>Nuevo producto</strong>.</ListGroup.Item>
            <ListGroup.Item>3. Completar la información del producto:
              <ul>
                <li>Nombre del producto.</li>
                <li>Marca (crear si no existe).</li>
                <li>Categoría y departamento.</li>
                <li>Descripción del producto.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>4. Crear los SKUs:
              <ul>
                <li>Asignar variaciones (como talla o color).</li>
                <li>Subir imágenes.</li>
                <li>Activar cada SKU individualmente.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>5. Activar el producto completo:
              <ul>
                <li>Asegurarse de definir <code>IsActive</code> y <code>IsAvailable</code> como <strong>true</strong> tanto para el producto como para los SKUs.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>6. Guardar y verificar que el producto esté publicado correctamente.</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Pregunta 2 */}
      <Card className="mb-4">
        <Card.Header as="h5">2. Explique el concepto de "Inventario" en VTEX IO y cómo se gestiona. ¿Qué pasos debes seguir para actualizar el inventario de un producto?</Card.Header>
        <Card.Body>
          <p>
            El inventario en VTEX IO indica la cantidad de unidades disponibles de un SKU específico en un centro logístico (CD).
          </p>
          <ListGroup variant="flush">
            <ListGroup.Item>1. Ir a <strong>Logística &gt; Inventario</strong>.</ListGroup.Item>
            <ListGroup.Item>2. Buscar el SKU correspondiente.</ListGroup.Item>
            <ListGroup.Item>3. Seleccionar el centro de distribución (CD) donde se quiere asignar el inventario.</ListGroup.Item>
            <ListGroup.Item>4. Ingresar la cantidad disponible o marcar como stock ilimitado.</ListGroup.Item>
            <ListGroup.Item>5. Guardar los cambios.</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Pregunta 3 */}
      <Card className="mb-4">
        <Card.Header as="h5">3. ¿Qué son las categorías en VTEX y cómo se configuran?</Card.Header>
        <Card.Body>
          <p>
            Las categorías permiten organizar el catálogo de productos para facilitar la navegación, el filtrado y la optimización SEO.
          </p>
          <ListGroup variant="flush">
            <ListGroup.Item>1. Ir a <strong>Catálogo &gt; Categorías</strong>.</ListGroup.Item>
            <ListGroup.Item>2. Crear un departamento si no existe.</ListGroup.Item>
            <ListGroup.Item>3. Dentro del departamento, crear una o varias categorías.</ListGroup.Item>
            <ListGroup.Item>4. Asignar nombre, descripción y especificaciones para filtros si se requieren.</ListGroup.Item>
            <ListGroup.Item>5. Guardar los cambios.</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Pregunta 4 */}
      <Card className="mb-4">
        <Card.Header as="h5">4. ¿Cómo se configura un descuento promocional para una categoría de productos en VTEX?</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>1. Ir a <strong>Promociones y Cupones</strong>.</ListGroup.Item>
            <ListGroup.Item>2. Crear una nueva promoción.</ListGroup.Item>
            <ListGroup.Item>3. Asignar nombre y tipo de descuento (porcentaje, monto fijo, etc.).</ListGroup.Item>
            <ListGroup.Item>4. En <strong>Condiciones</strong>, seleccionar "Categoría de producto" y elegir la categoría correspondiente.</ListGroup.Item>
            <ListGroup.Item>5. Establecer el valor del descuento.</ListGroup.Item>
            <ListGroup.Item>6. Configurar fechas y condiciones adicionales si es necesario.</ListGroup.Item>
            <ListGroup.Item>7. Activar y guardar la promoción.</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}


function Dashboard() {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard/seccion1">Sección 1</Nav.Link>
              <Nav.Link href="/dashboard/seccion2">Sección 2</Nav.Link>
              <Nav.Link href="/dashboard/seccion3">Sección 3</Nav.Link>
              <Nav.Link href="/dashboard/seccion4">Sección 4</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contenido */}
      <Container className="mt-4">
        <Routes>
          <Route path="seccion1" element={<Section1 />} />
          <Route path="seccion2" element={<Section2 />} />
          <Route path="seccion3" element={<Section3 />} />
          <Route path="seccion4" element={<Section4 />} />
        </Routes>
      </Container>
    </div>
  );
}

export default Dashboard;