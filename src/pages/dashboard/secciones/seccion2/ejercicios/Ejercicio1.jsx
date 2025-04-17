import React, { useContext, useState } from 'react';
import { Container, Form, Button, Row, Col, Table } from 'react-bootstrap';
import { createProduct, createSku, uploadSkuImage } from '../../../../../services/vtexClient';
import { ProductContext } from '../../../../../context/ProductContext'; // Importar el contexto

const Ejercicio1 = () => {
      // Estado inicial para el producto
      const [productData, setProductData] = useState({
        productName: 'Camiseta de Algodón',
        description: 'Camiseta de algodón 100% para uso diario. Disponible en varias tallas y colores.',
        referenceCode: 'PRUEBA1-2210-B01XS',
        departmentId: '1', // ID del departamento (Hombre)
        categoryId: '86', // ID de la categoría (Polos)
      });
    
      // Estado inicial para los SKUs
      const [skuData, setSkuData] = useState({
        sizes: 'S, M, L',
        colors: 'Rojo, Azul, Verde',
        imageUrl: '',
      });
    
      // Estado para almacenar los SKUs generados
      const [generatedSkus, setGeneratedSkus] = useState([]);
      const { productId, setProductId } = useContext(ProductContext); // Usar el contexto

      // Manejar cambios en los inputs del producto
      const handleProductChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
      };
    
      // Manejar cambios en los inputs de los SKUs
      const handleSkuChange = (e) => {
        const { name, value } = e.target;
        setSkuData({ ...skuData, [name]: value });
      };
    
      // Crear el producto
      const handleCreateProduct = async (e) => {
        e.preventDefault();
        console.log('Datos del producto enviados:', productData);
    
        const payload = {
          Name: productData.productName,
          Description: productData.description,
          RefId: productData.referenceCode,
          DepartmentId: parseInt(productData.departmentId, 10),
          CategoryId: parseInt(productData.categoryId, 10),
        };
    
        try {
          const response = await createProduct(payload);
          console.log('Producto creado exitosamente:', response);
          setProductId(response.Id); // Guardar el ID del producto
          alert('Producto creado exitosamente.');
        } catch (error) {
          alert('Error al crear el producto. Revisa la consola para más detalles.');
        }
      };
    
      // Generar SKUs
      const handleGenerateSkus = () => {
        const sizes = skuData.sizes.split(',').map((size) => size.trim());
        const colors = skuData.colors.split(',').map((color) => color.trim());
        const skus = [];
    
        sizes.forEach((size) => {
          colors.forEach((color) => {
            skus.push({
              Name: `${productData.productName} - ${size} - ${color}`,
              RefId: `${productData.referenceCode}-${size}-${color}`,
              IsActive: true,
              Height: 2,
              Width: 30,
              Length: 30,
              WeightKg: 0.2,
              CubicWeight: 0.3,
              ImageUrl: skuData.imageUrl,
            });
          });
        });
    
        setGeneratedSkus(skus);
      };
    
      // Actualizar la URL de la imagen de un SKU
      const handleImageChange = (index, value) => {
        const updatedSkus = [...generatedSkus];
        updatedSkus[index].ImageUrl = value;
        setGeneratedSkus(updatedSkus);
      };
    
      // Crear los SKUs en VTEX y asociar imágenes
      const handleCreateSkus = async () => {
        if (!productId) {
          alert('Primero debes crear el producto.');
          return;
        }
    
        try {
          for (const sku of generatedSkus) {
            const payload = {
              ProductId: productId,
              Name: sku.Name,
              RefId: sku.RefId,
              IsActive: sku.IsActive,
              Height: sku.Height,
              Width: sku.Width,
              Length: sku.Length,
              WeightKg: sku.WeightKg,
              CubicWeight: sku.CubicWeight,
            };
    
            const response = await createSku(payload);
            console.log('SKU creado exitosamente:', response);
    
            // Subir la imagen del SKU
            if (sku.ImageUrl) {
              await uploadSkuImage(response.Id, sku.ImageUrl, sku.Name);
              console.log(`Imagen subida para el SKU ${response.Id}`);
            }
          }
          alert('Todos los SKUs fueron creados exitosamente con sus imágenes.');
        } catch (error) {
          alert('Error al crear los SKUs o subir las imágenes. Revisa la consola para más detalles.');
        }
      };
    
  return (
    <Container>
        {/* Sección para crear el producto */}
      <h2>Crear Producto</h2>
      <Form onSubmit={handleCreateProduct}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="productName">
              <Form.Label>Nombre del Producto</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                value={productData.productName}
                onChange={handleProductChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="referenceCode">
              <Form.Label>Código de Referencia</Form.Label>
              <Form.Control
                type="text"
                name="referenceCode"
                value={productData.referenceCode}
                onChange={handleProductChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={productData.description}
            onChange={handleProductChange}
          />
        </Form.Group>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="departmentId">
              <Form.Label>ID del Departamento</Form.Label>
              <Form.Control
                type="text"
                name="departmentId"
                value={productData.departmentId}
                onChange={handleProductChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="categoryId">
              <Form.Label>ID de la Categoría</Form.Label>
              <Form.Control
                type="text"
                name="categoryId"
                value={productData.categoryId}
                onChange={handleProductChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Crear Producto
        </Button>
      </Form>

      {/* Sección para generar y crear SKUs */}
      <h2 className="mt-5">Generar y Crear SKUs</h2>
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="sizes">
              <Form.Label>Tallas</Form.Label>
              <Form.Control
                type="text"
                name="sizes"
                value={skuData.sizes}
                onChange={handleSkuChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="colors">
              <Form.Label>Colores</Form.Label>
              <Form.Control
                type="text"
                name="colors"
                value={skuData.colors}
                onChange={handleSkuChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="imageUrl" className="mb-3">
          <Form.Label>URL de la Imagen</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            value={skuData.imageUrl}
            onChange={handleSkuChange}
          />
        </Form.Group>
        <Button variant="secondary" onClick={handleGenerateSkus}>
          Previsualizar SKUs
        </Button>
      </Form>

      {/* Tabla para previsualizar los SKUs */}
      {generatedSkus.length > 0 && (
        <>
          <h3 className="mt-4">SKUs Generados</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Referencia</th>
                <th>Activo</th>
                <th>Altura</th>
                <th>Ancho</th>
                <th>Largo</th>
                <th>Peso</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {generatedSkus.map((sku, index) => (
                <tr key={index}>
                  <td>{sku.Name}</td>
                  <td>{sku.RefId}</td>
                  <td>{sku.IsActive ? 'Sí' : 'No'}</td>
                  <td>{sku.Height}</td>
                  <td>{sku.Width}</td>
                  <td>{sku.Length}</td>
                  <td>{sku.WeightKg}</td>
                  <td>
                    <Form.Control
                      type="text"
                      value={sku.ImageUrl}
                      onChange={(e) => handleImageChange(index, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="primary" className="mt-3" onClick={handleCreateSkus}>
            Crear SKUs en VTEX
          </Button>
        </>
      )}
    </Container>
  )
}

export default Ejercicio1