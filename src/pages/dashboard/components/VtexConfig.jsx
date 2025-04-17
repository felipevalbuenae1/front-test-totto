import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const VtexConfig = () => {
  const [appKey, setAppKey] = useState(localStorage.getItem('X-VTEX-API-AppKey') || '');
  const [appToken, setAppToken] = useState(localStorage.getItem('X-VTEX-API-AppToken') || '');
  const [showAlert, setShowAlert] = useState(false);

  const handleSave = () => {
    localStorage.setItem('X-VTEX-API-AppKey', appKey);
    localStorage.setItem('X-VTEX-API-AppToken', appToken);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Ocultar alerta después de 3 segundos
    window.location.reload(); // Recargar para actualizar los HEADERS dinámicamente
  };

  return (
    <Container className="mt-4 mb-5 border border-primary rounded p-4">
      <h2 className="mb-4 text-primary">Configuración de VTEX</h2>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Credenciales guardadas correctamente.
        </Alert>
      )}
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="appKey">
              <Form.Label>X-VTEX-API-AppKey</Form.Label>
              <Form.Control
                type="text"
                value={appKey}
                onChange={(e) => setAppKey(e.target.value)}
                placeholder="Ingresa tu AppKey"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="appToken">
              <Form.Label>X-VTEX-API-AppToken</Form.Label>
              <Form.Control
                type="text"
                value={appToken}
                onChange={(e) => setAppToken(e.target.value)}
                placeholder="Ingresa tu AppToken"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" onClick={handleSave}>
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default VtexConfig;