# ⏱️ Timer Challenge Game - Refs & Portals in React

Este proyecto es parte de una sección avanzada del curso de React de Maximilian Schwarzmüller. Está diseñado para practicar y comprender el uso de **Refs** y **Portals** en React, junto con conceptos como el manejo de estado, componentes personalizados y renderizado condicional.

## 🎮 Descripción

"Timer Challenge Game" es un pequeño juego donde el usuario debe detener un temporizador **lo más cerca posible del momento en que este expire**, sin dejar que llegue a cero.

Se trata de un ejercicio práctico que combina lógica de temporizador, control del DOM a través de Refs, y uso de Portales para renderizar un modal fuera del árbol principal del componente.

## 🚀 Funcionalidades

- Iniciar y detener un temporizador con precisión.
- Detectar si el usuario ganó o perdió según el momento de detención.
- Mostrar un **modal de resultados** usando Portales.
- Medir el tiempo restante usando `setInterval` para mayor precisión.
- Acceso directo a elementos del DOM con `useRef`.
- Evitar estados innecesarios utilizando referencias en lugar de `useState` en ciertos casos.

## 🧠 Conceptos de React aplicados

- `useRef` para:
  - Controlar acceso directo al DOM.
  - Almacenar referencias a `setInterval`.
  - Controlar métodos imperativos entre componentes.
- `createPortal` para:
  - Renderizar el componente `ResultModal` fuera del DOM principal.
- `setInterval` vs `setTimeout` para lógica precisa del temporizador.
- `useEffect` y limpieza de efectos para detener correctamente el temporizador.
- Componentes controlados vs no controlados.
