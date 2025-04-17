import React, { createContext, useState } from 'react';

// Crear el contexto
export const ProductContext = createContext();

// Proveedor del contexto
export const ProductProvider = ({ children }) => {
  const [productId, setProductId] = useState(null);

  return (
    <ProductContext.Provider value={{ productId, setProductId }}>
      {children}
    </ProductContext.Provider>
  );
};