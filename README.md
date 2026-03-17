# Entrega 2 - E-commerce de Vinos

## Descripción
Entrega Final del proyecto e-commerce de vinos con React para Coderhouse.

Comandos:
```
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para producción
npm run preview  # Vista previa de build de producción
```

## Base de datos (Firebase)

Para cargar los productos en Firestore por primera vez, ejecutar:
```
node src/db/seed.js
```
> ⚠️ Ejecutar una sola vez. Correrlo múltiples veces duplicará los productos en la base de datos.

## Componentes Creados

### NavBar
- Barra de navegación de categorias "Todos", "Tintos", "Blancos", "Rosados" o "Espumantes"
- Logo de la tienda
- Widget del carrito de compras

### ItemListContainer
- Contenedor que maneja el estado y carga de productos (todos o por categoría)

### ItemDetail 
- Vista detallada con contador y botón "Agregar al carrito"

### Cart
- Vista completa del carrito con la lista de productos agregados, sus cantidades y precios.
- Permite modificar cantidades, eliminar ítems o vaciar el carrito, y muestra el total del pedido con un botón para avanzar al checkout.

### CartWidget
- Ícono de carrito en la NavBar que muestra un badge con la cantidad total de productos en el carrito.
- Al hacer clic redirige a la ruta `/cart`.

### Checkout
- Formulario de compra que solicita nombre, email y teléfono del comprador con validaciones en tiempo real.
- Al confirmar, guarda la orden en Firestore, actualiza el stock de los productos y muestra el ID de la orden generada.

### Base de datos (db.js)
- Inicializa la conexión con Firebase usando las variables de entorno definidas en `.env`.
- Exporta la instancia de Firestore (`db`) utilizada en toda la app para leer y escribir productos y órdenes.

### 404 
- Vista de una ruta no encontrada

