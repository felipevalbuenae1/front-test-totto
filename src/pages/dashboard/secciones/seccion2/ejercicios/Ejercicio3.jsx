import React, { useState, useEffect, useContext } from 'react';
import { Table, Button, Alert, Form } from 'react-bootstrap';
import { ProductContext } from '../../../../../context/ProductContext'; // Importar el contexto
import { getSkusByProductId, updatePrice } from '../../../../../services/vtexClient'; // Asegúrate de que la ruta sea correcta

const Ejercicio3 = () => {
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

  // Actualizar el precio de un SKU
  const handleUpdatePrice = async (skuId) => {
    const priceData = {
      currency: 'COP',
      price: 35000,
      listPrice: 35000,
      markup: 0,
      priceValidUntil: '2099-12-31T23:59:59Z',
      priceTables: [
        {
          id: 'Preciosb2b',
          price: 35000,
        },
      ],
    };

    try {
      await updatePrice(skuId, priceData);
      alert(`Precio actualizado para el SKU ${skuId}`);
    } catch (err) {
      console.error('Error al actualizar el precio:', err);
      alert('Error al actualizar el precio. Revisa la consola para más detalles.');
    }
  };

  return (
    <div>
      <h2 className="mb-4">Actualizar Precios</h2>

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
                    onClick={() => handleUpdatePrice(sku.Id)}
                  >
                    Actualizar Precio
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

export default Ejercicio3;