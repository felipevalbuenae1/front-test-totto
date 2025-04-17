const BASE_URL = 'https://tottoqa.vtexcommercestable.com.br/api';

/**
 * Configuración de los encabezados para las solicitudes.
 */
const HEADERS = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    'X-VTEX-API-AppKey': localStorage.getItem('X-VTEX-API-AppKey'),
    'X-VTEX-API-AppToken': localStorage.getItem('X-VTEX-API-AppToken'),
};

/**
 * Función genérica para realizar solicitudes HTTP a la API de VTEX.
 * @param {string} endpoint - Endpoint de la API (por ejemplo, "/catalog/pvt/product").
 * @param {string} method - Método HTTP (GET, POST, PUT, DELETE).
 * @param {Object} [body] - Cuerpo de la solicitud (opcional).
 * @returns {Promise<Object>} - Respuesta de la API.
 */
export const vtexRequest = async (endpoint, method, body = null) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: HEADERS,
      body: body ? JSON.stringify(body) : null,
      mode: 'no-cors',
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error;
  }
};

/**
 * Función específica para crear un producto en VTEX.
 * @param {Object} payload - Datos del producto a enviar.
 * @returns {Promise<Object>} - Respuesta de la API.
 */
export const createProduct = async (payload) => {
  return vtexRequest('/catalog/pvt/product', 'POST', payload);
};

export const createSku = async (payload) => {
  return vtexRequest('/catalog/pvt/stockkeepingunit', 'POST', payload);
};

export const uploadSkuImage = async (skuId, imageUrl, label) => {
    const formData = new FormData();
    formData.append('file', imageUrl); // URL o archivo local
    formData.append('label', label);
  
    try {
      const response = await fetch(`${BASE_URL}/catalog/pvt/stockkeepingunit/${skuId}/file`, {
        method: 'POST',
        headers: HEADERS,
        body: formData,
        mode: 'no-cors',
      });
  
      if (!response.ok) {
        throw new Error(`Error al subir la imagen: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      throw error;
    }
};

export const getSkusByProductId = async (productId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/catalog_system/pvt/sku/stockkeepingunitByProductId/${productId}`,
        {
          method: 'GET',
          headers: HEADERS,
          mode: 'no-cors',
        }
      );
  
      if (!response.ok) {
        throw new Error(`Error al obtener los SKUs: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error al obtener los SKUs:', error);
      throw error;
    }
};

export const updateInventory = async (skuId, warehouseId, quantity) => {
    const payload = {
      unlimitedQuantity: false,
      dateUtcOnBalanceSystem: null,
      quantity: quantity,
    };
  
    try {
      const response = await fetch(
        `${BASE_URL}/logistics/pvt/inventory/skus/${skuId}/warehouses/${warehouseId}`,
        {
          method: 'PUT',
          headers: HEADERS,
          body: JSON.stringify(payload),
          mode: 'no-cors',
        }
      );
  
      if (!response.ok) {
        throw new Error(`Error al actualizar el inventario: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error al actualizar el inventario:', error);
      throw error;
    }
};

export const updatePrice = async (skuId, priceData) => {
    if (!skuId) {
      throw new Error('El ID del SKU es obligatorio para actualizar el precio.');
    }
  
    if (!priceData || typeof priceData !== 'object') {
      throw new Error('Los datos del precio son obligatorios y deben ser un objeto válido.');
    }
  
    try {
      const response = await fetch(
        `${BASE_URL}/pricing/prices/${skuId}`,
        {
          method: 'PUT',
          headers: HEADERS, // Reutilizar los encabezados globales
          body: JSON.stringify(priceData),
          mode: 'no-cors', // Necesario para que funcione
        }
      );
  
      if (!response.ok) {
        throw new Error(`Error al actualizar el precio: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error al actualizar el precio:', error.message);
      throw error;
    }
  };

  export const getOrders = async (orderIds, appKey, appToken) => {
    const accountName = 'tottoqa';
    const environment = 'vtexcommercestable.com.br';
    const fetchedOrders = [];
  
    for (const orderId of orderIds) {
      try {
        const response = await fetch(
          `https://${accountName}.${environment}/api/oms/pvt/orders/${orderId}`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'X-VTEX-API-AppKey': appKey,
              'X-VTEX-API-AppToken': appToken,
            },
            mode: 'no-cors', // Necesario para que funcione
          }
        );
  
        if (!response.ok) {
          throw new Error(`Error al obtener la orden ${orderId}: ${response.statusText} 401 (Unauthorized)`);
        }
  
        const data = await response.json();
        fetchedOrders.push({
          orderId: data.orderId,
          creationDate: data.creationDate,
          clientName: `${data.clientProfileData?.firstName || ''} ${data.clientProfileData?.lastName || ''}`,
          totalValue: (data.value / 100).toFixed(2), // Convertir de centavos a moneda
          status: data.status,
        });
      } catch (error) {
        console.error(`Error fetching order ${orderId}:`, error);
        throw error; // Lanza el error para que el componente lo maneje
      }
    }
  
    return fetchedOrders;
  };