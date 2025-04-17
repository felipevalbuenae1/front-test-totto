import React, { useState } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import Ejercicio1 from './ejercicios/Ejercicio1';
import Ejercicio2 from './ejercicios/Ejercicio2';
import Ejercicio3 from './ejercicios/Ejercicio3';
import { ProductProvider } from '../../../../context/ProductContext'; // Importar el proveedor del contexto
import VtexConfig from '../../components/VtexConfig';

function Section2() {
  // Estado para manejar la tab activa
  const [activeTab, setActiveTab] = useState('ejercicio1');

  return (
    <ProductProvider>
      <Container className="mt-4">
        <h1 className="mb-4 text-primary">Sección 2: Ejercicios Prácticos</h1>
        <VtexConfig /> {/* Componente para la configuración de VTEX */}
        {/* Tabs para los ejercicios */}
        <Tabs
          id="exercise-tabs"
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-3"
        >
          <Tab eventKey="ejercicio1" title="Ejercicio 1: Crear Producto">
            <Ejercicio1 />
          </Tab>
          <Tab eventKey="ejercicio2" title="Ejercicio 2: Inventario">
            <Ejercicio2 />
          </Tab>
          <Tab eventKey="ejercicio3" title="Ejercicio 3: Precios">
            <Ejercicio3 />
          </Tab>
        </Tabs>
      </Container>
    </ProductProvider>
  );
}

export default Section2;