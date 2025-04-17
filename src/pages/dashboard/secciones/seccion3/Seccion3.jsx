import React from 'react';
import { Container, Row, Col, Card, Accordion, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Seccion3 = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4 text-primary">Sección 3: Front-end</h1>

{/* Ejercicio 1: Mostrar órdenes */}
        <Card className="mb-4">
            <Card.Header>
            <h2 className="text-secondary">1. Ejercicio: Mostrar Órdenes</h2>
            </Card.Header>
        <Card.Body>
          <p>
             Haz clic en el botón para ir a la página de <Link to="/template">Template</Link>.
          </p>
          
          <div className="text-center mt-3">
            <Link to="/template">
              <Button variant="primary">Ir a Template</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>

      {/* Página de Producto */}
      <Card className="mb-4">
        <Card.Header>
          <h2 className="text-secondary">2. Página de Producto</h2>
        </Card.Header>
        <Card.Body>
          <p>
            En VTEX IO, las páginas de producto se configuran usando Store Framework. Este sistema utiliza bloques declarativos definidos en archivos JSON dentro de la carpeta <code>store/blocks</code>. Aquí se compone la estructura de la página usando bloques predefinidos y layout flexible.
          </p>
          <p>En el siguiente ejemplo, se crea una página con dos columnas: una para las imágenes del producto y otra para la descripción y el botón de compra.</p>
          <pre className="bg-light p-3 rounded">
{`{
  "store.product": {
    "children": [
      "flex-layout.row#product-content"
    ]
  },
  "flex-layout.row#product-content": {
    "children": [
      "flex-layout.col#product-images",
      "flex-layout.col#product-info"
    ]
  },
  "flex-layout.col#product-images": {
    "children": ["product-images"],
    "props": { "width": "6" }
  },
  "flex-layout.col#product-info": {
    "children": ["product-name", "product-description", "buy-button"],
    "props": { "width": "6" }
  }
}`}
          </pre>
          <p>
            El componente <code>product-images</code> renderiza un carrusel de imágenes, <code>product-description</code> muestra el detalle del producto, y <code>buy-button</code> permite agregar al carrito.
          </p>
        </Card.Body>
      </Card>

      {/* Estructura de una App VTEX IO */}
      <Card className="mb-4">
        <Card.Header>
          <h2 className="text-secondary">3. Estructura de una App VTEX IO</h2>
        </Card.Header>
        <Card.Body>
          <p>
            Una aplicación en VTEX IO tiene una estructura modular organizada por responsabilidades. Esta es una estructura típica:
          </p>
          <pre className="bg-light p-3 rounded">
{`my-app/
├── manifest.json          # Configuración y metadatos de la app
├── react/                 # Componentes frontend en React
│   └── MyComponent.tsx
├── store/                 # Declaraciones de bloques y configuraciones
│   ├── blocks/
│   └── interfaces.json
├── styles/                # Estilos CSS o CSS Modules
├── messages/              # Archivos de internacionalización (i18n)
│   └── en.json
├── node/                  # Lógica backend opcional (GraphQL, middleware)
│   └── index.ts
└── package.json           # Dependencias de la app`}
          </pre>
          <p>
            El archivo <code>manifest.json</code> define la configuración principal de la app, incluyendo los builders como <code>react</code>, <code>store</code> o <code>node</code>. La carpeta <code>react/</code> contiene componentes visuales y funcionales. <code>store/blocks</code> define cómo se ensamblan estos componentes.
          </p>
        </Card.Body>
      </Card>

      {/* Personalización de Componentes */}
      <Card className="mb-4">
        <Card.Header>
          <h2 className="text-secondary">4. Personalización de Componentes</h2>
        </Card.Header>
        <Card.Body>
          <p>
            VTEX IO permite crear componentes React personalizados, los cuales se pueden usar en las páginas del Store. Aquí hay un ejemplo básico:
          </p>
          <pre className="bg-light p-3 rounded">
{`// react/Greeting.tsx
const Greeting = ({ name }) => <h1>Hola, {name}!</h1>;`}
          </pre>
          <p>
            Después de crear el componente, se debe registrar en el archivo <code>store/interfaces.json</code> para que pueda usarse como bloque:
          </p>
          <pre className="bg-light p-3 rounded">
{`{
  "greeting": {
    "component": "Greeting"
  }
}`}
          </pre>
          <p>Finalmente, se puede agregar al Store usando su identificador:</p>
          <pre className="bg-light p-3 rounded">
{`{
  "store.home": {
    "children": ["greeting"]
  },
  "greeting": {
    "props": {
      "name": "David"
    }
  }
}`}
          </pre>
        </Card.Body>
      </Card>

      {/* Gestión del Estado */}
      <Card className="mb-4">
        <Card.Header>
          <h2 className="text-secondary">5. Gestión del Estado y Comunicación entre Componentes</h2>
        </Card.Header>
        <Card.Body>
          <p>
            En aplicaciones de VTEX IO, se puede manejar el estado con varias herramientas de React. Algunas opciones comunes incluyen:
          </p>
          <ul>
            <li>
              <strong>React Context API:</strong> Recomendado para compartir estado global entre componentes.
            </li>
            <li>
              <strong>Apollo Client:</strong> Para manejo de estado remoto/local con GraphQL.
            </li>
            <li>
              <strong>useRuntime (de vtex.render-runtime):</strong> Permite acceder a información del entorno (account, route, etc.).
            </li>
            <li>
              <strong>Session Context:</strong> Permite acceder a información del usuario logueado.
            </li>
          </ul>
          <p>Ejemplo práctico usando React Context API:</p>
          <pre className="bg-light p-3 rounded">
{`// context/ProductContext.tsx
import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext<any>(null);

export const ProductProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState('Rojo');

  return (
    <ProductContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);`}
          </pre>
          <p>Ejemplo de uso en componentes:</p>
          <pre className="bg-light p-3 rounded">
{`// Componente 1: Selector de color
const ColorSelector = () => {
  const { setSelectedColor } = useProduct();
  return <button onClick={() => setSelectedColor('Azul')}>Azul</button>;
};

// Componente 2: Mostrar color seleccionado
const ColorDisplay = () => {
  const { selectedColor } = useProduct();
  return <p>Color seleccionado: {selectedColor}</p>;
};`}
          </pre>
          <p>
            Este enfoque permite compartir datos entre componentes de manera eficiente, como en la selección de variaciones, filtros o cualquier comportamiento compartido.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Seccion3;