import React, { createContext, useContext, useState, useEffect } from 'react';

const CarritoContext = createContext();

export function useCarrito() {
  return useContext(CarritoContext);
}

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    // Obtén el carrito almacenado en localStorage al cargar la página.
    const storedCarrito = localStorage.getItem('carrito');
    if (storedCarrito) {
      setCarrito(JSON.parse(storedCarrito));
    }
  }, []);

  useEffect(() => {
    // Almacena el carrito en localStorage cada vez que cambie.
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const handleButtonClick = (product) => {
    const existingProductIndex = carrito.findIndex(
      (p) => p.id === product.id && p.talleSeleccionado === (product.talleSeleccionado || 'default')
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya existe en el carrito (por ID y talleSeleccionado), aumentar la cantidad
      const updatedCarrito = [...carrito];
      updatedCarrito[existingProductIndex].cantidad += 1;
      setCarrito(updatedCarrito);

    } else {
      // Si el producto no existe en el carrito (por ID y talleSeleccionado), agregarlo como nuevo
      setCarrito([
        ...carrito,
        {
          id: product.id,
          image: product.imagen,
          nombre: product.nombre,
          precio: product.precio,
          cantidad: 1, // Inicializar cantidad en 1 para un nuevo producto
          talleSeleccionado: product.talleSeleccionado || 'default', // Default value for talleSeleccionado
        },
      ]);

    }
  };

  const clearCarrito = () => {
    setCarrito([]);
  };

  const eliminarProductoDelCarrito = (productoAEliminar) => {
    // Filtrar el carrito para excluir el producto a eliminar
    const carritoActualizado = carrito.filter(
      (producto) =>
        !(producto.id === productoAEliminar.id && producto.talleSeleccionado === productoAEliminar.talleSeleccionado)
    );

    // Actualizar el carrito con la nueva lista de productos
    setCarrito(carritoActualizado);

    // Puedes agregar notificaciones u otras lógicas aquí
  };

  const aumentarCantidad = (productoAAumentar) => {
    const carritoActualizado = carrito.map((producto) => {
      if (
        producto.id === productoAAumentar.id &&
        producto.talleSeleccionado === (productoAAumentar.talleSeleccionado || 'default')
      ) {
        // Aumentar la cantidad del producto
        producto.cantidad += 1;
      }
      return producto;
    });

    setCarrito(carritoActualizado);
  };

  const disminuirCantidad = (productoADisminuir) => {
    const carritoActualizado = carrito.map((producto) => {
      if (
        producto.id === productoADisminuir.id &&
        producto.talleSeleccionado === (productoADisminuir.talleSeleccionado || 'default')
      ) {
        // Reducir la cantidad del producto, asegurándose de que no sea menor que 1
        producto.cantidad = Math.max(1, producto.cantidad - 1);
      }
      return producto;
    });

    setCarrito(carritoActualizado);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, handleButtonClick, clearCarrito, eliminarProductoDelCarrito, disminuirCantidad, aumentarCantidad }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
