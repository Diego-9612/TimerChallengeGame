# ⏱️ Timer Challenge Game - Refs & Portals en React

Un proyecto práctico diseñado para profundizar en conceptos avanzados de **React**, como el uso de **Refs** y **Portals**, mediante la creación de un pequeño juego de precisión con temporizador.

---

## 🎮 Descripción del Juego

"Timer Challenge Game" es un mini juego donde el objetivo es detener un temporizador **tan cerca como sea posible del tiempo límite**, sin dejar que llegue a cero. Se trata de un ejercicio que integra lógica de temporización, manejo de referencias al DOM y renderizado condicional con portales.

---

## 🚀 Funcionalidades Clave

* ⏱️ Iniciar y detener un temporizador con alta precisión.
* ✅ Evaluar el resultado del jugador según el tiempo de reacción.
* 📤 Mostrar resultados en un modal renderizado fuera del árbol principal mediante **Portals**.
* 🧮 Medición del tiempo restante usando `setInterval` para mejor exactitud.
* 🎯 Acceso directo al DOM a través de `useRef`.
* 🧼 Evita renderizados innecesarios gracias al uso de referencias en lugar de estados.

---

## 🧠 Conceptos de React Aplicados

* **`useRef`** para:

  * Referenciar elementos DOM.
  * Controlar intervalos de tiempo (`setInterval`).
  * Implementar métodos imperativos entre componentes.
* **`createPortal`** para:

  * Renderizar el componente `ResultModal` fuera del contenedor padre principal.
* Comparativa entre **`setInterval`** y **`setTimeout`** para precisión temporal.
* Uso adecuado de **`useEffect`** con funciones de limpieza para evitar fugas de memoria.
* Diferencias entre **componentes controlados y no controlados**.

---

## 🧪 Cómo Probar el Proyecto

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/timer-challenge-game.git
cd timer-challenge-game
```

2. Instala dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre `http://localhost:5173` en tu navegador para comenzar.

---

## 📁 Estructura del Proyecto

```
timer-challenge-game/
├── public/
├── src/
│   ├── components/
│   │   ├── TimerChallenge.jsx
│   │   └── ResultModal.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧩 Tecnologías Usadas

* React 18+
* Vite
* JavaScript (ES6+)
* CSS Modules / Tailwind opcional

---

## 📬 Contacto

* Email: [diegoguerrero@umariana.edu.co](mailto:diegoguerrero@umariana.edu.co)
* LinkedIn: [Diego Guerrero](https://www.linkedin.com/in/diego-guerrero-dev)
* GitHub: [@Diego-9612](https://github.com/Diego-9612)

---

> Este proyecto es parte de un entrenamiento práctico en técnicas avanzadas de React para mejorar la interacción con el DOM, el control del renderizado y la arquitectura de componentes complejos.
