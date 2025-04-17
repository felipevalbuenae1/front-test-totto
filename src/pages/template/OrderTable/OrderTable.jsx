import React, { useState } from 'react';
import { Table, Form, Button, Spinner, Container, Alert } from 'react-bootstrap';
import { getOrders } from '../../../services/vtexClient';

const OrderTable = () => {
  const [appKey, setAppKey] = useState('vtexappkey-tottoqa-IGFKQO');
  const [appToken, setAppToken] = useState(
    'VUMMGFNKSOVZTPBYAHDLZLPDKLEZXBRMGQZUHOBWPMMUPKBMJGPIFPZECOJDEQBPLOUEOKEKBYEHNLFAHAFCWBMNSMUMFYZRBJZZTHCVBQXXMJDJASCLFKEKRPJQYMGO'
  );
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const orderIds = [
    '1439020519386-01',
    '1438080519382-01',
    '1438080519384-01',
    '1432840519380-01',
    '1430650519374-01',
    '1430420519370-01',
    '1427730519368-01',
    '1424410519349-01',
  ];

  const fetchOrders = async () => {
    setLoading(true);
    setError(null); // Reinicia el estado de error

    try {
      const fetchedOrders = await getOrders(orderIds, appKey, appToken);
      setOrders(fetchedOrders);
    } catch (error) {
      setError(error.message); // Muestra el mensaje de error en la interfaz
    }

    setLoading(false);
  };

  return (
    <Container>
      <h1 className="my-4">Órdenes</h1>
      <Form className="mb-4">
        <Form.Group controlId="appKey" className="mb-3">
          <Form.Label>App Key</Form.Label>
          <Form.Control
            type="text"
            value={appKey}
            onChange={(e) => setAppKey(e.target.value)}
            placeholder="Ingresa el App Key"
          />
        </Form.Group>
        <Form.Group controlId="appToken" className="mb-3">
          <Form.Label>App Token</Form.Label>
          <Form.Control
            type="text"
            value={appToken}
            onChange={(e) => setAppToken(e.target.value)}
            placeholder="Ingresa el App Token"
          />
        </Form.Group>
        <Button variant="primary" onClick={fetchOrders} disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Cargar Órdenes'}
        </Button>
      </Form>

      {error && <Alert variant="danger">{error}</Alert>}

      {orders.length > 0 && (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Fecha de Creación</th>
              <th>Cliente</th>
              <th>Total</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{new Date(order.creationDate).toLocaleString()}</td>
                <td>{order.clientName}</td>
                <td>${order.totalValue}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default OrderTable;