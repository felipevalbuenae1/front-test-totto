import React, { useState, useEffect, useContext } from 'react';
import { Table, Button, Alert, Form } from 'react-bootstrap';
import { ProductContext } from '../../../../../context/ProductContext'; // Importar el contexto
import { getSkusByProductId, updateInventory } from '../../../../../services/vtexClient'; // Asegúrate de que la ruta sea correcta

const Ejercicio2 = () => {
  const { productId: contextProductId } = useContext(ProductContext); // Obtener el productId del contexto
  const [productId, setProductId] = useState(contextProductId || ''); // Estado para el productId
  const [skus, setSkus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener la lista de SKUs al cargar el componente o cuando cambie el productId
  useEffect(() => {
    const fetchSkus = async () => {
      if (!productId) {
        setError('No se ha proporcionado un Product ID. Por favor, crea un producto primero.');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await getSkusByProductId(productId);
        setSkus(response);
      } catch (err) {
        console.error('Error al obtener los SKUs:', err);
        setError('Error al obtener los SKUs. Revisa la consola para más detalles.');
      } finally {
        setLoading(false);
      }
    };

    fetchSkus();
  }, [productId]);

  // Actualizar el inventario de un SKU
  const handleUpdateInventory = async (skuId) => {
    const warehouseId = 'CD7'; // Almacén predeterminado
    const quantity = 25; // Cantidad predeterminada

    try {
      await updateInventory(skuId, warehouseId, quantity);
      alert(`Inventario actualizado para el SKU ${skuId}`);
    } catch (err) {
      console.error('Error al actualizar el inventario:', err);
      alert('Error al actualizar el inventario. Revisa la consola para más detalles.');
    }
  };

  return (
    <div>
      <h2 className="mb-4">Actualizar Inventario</h2>

      {/* Input para el Product ID */}
      <Form.Group className="mb-3">
        <Form.Label>Product ID</Form.Label>
        <Form.Control
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="Ingresa el Product ID"
        />
      </Form.Group>

      {/* Mostrar mensaje si no hay Product ID */}
      {!productId && (
        <Alert variant="warning">
          No se ha creado un producto. Por favor, crea un producto en el Ejercicio 1.
        </Alert>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {loading && <p>Cargando SKUs...</p>}

      {skus.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID del SKU</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {skus.map((sku) => (
              <tr key={sku.Id}>
                <td>{sku.Id}</td>
                <td>{sku.Name}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleUpdateInventory(sku.Id)}
                  >
                    Actualizar Inventario
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Ejercicio2;