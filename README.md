# Entrega 2 - E-commerce de Vinos

## Descripción
Segunda entrega del proyecto e-commerce de vinos con React para Coderhouse.

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

### 404 
- Vista de una ruta no encontrada

