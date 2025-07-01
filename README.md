# Clase 2 – React + Bootstrap + JSON dinámico

En esta sesión vamos a continuar el desarrollo de nuestro proyecto de portafolio en React. Ya hemos visto cómo crear componentes básicos con React y aplicar estilos con Bootstrap. Hoy vamos a enfocarnos en conceptos fundamentales como:

- **Uso de props** para comunicar componentes
- **Renderizado dinámico desde un archivo JSON**
- **Separación de componentes**
- **Introducción a `useEffect`**
- **Simulación de una API**
- **Preparación para el uso de modales**

---

## 🔁 Repaso rápido

- Ya tenemos los componentes: `Navbar`, `Hero`, `Features`, `Footer`.
- Bootstrap se importó desde `main.jsx`:
```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

---

## 🎯 Objetivo de la clase

Construir una sección de proyectos dinámica para un portafolio, que:
- Cargue datos desde un archivo `proyectos.json`.
- Use un componente por tarjeta (`TarjetaProyecto`).
- A futuro (en otra clase o al final) abra un modal para más información.

---

## 🧱 Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Proyectos.jsx ← componente principal de esta clase
│   ├── TarjetaProyecto.jsx ← muestra cada tarjeta
│   └── ProyectoModal.jsx ← (inactivo por ahora)
├── App.jsx
└── main.jsx
```

---

## 🗃️ ¿Qué es `proyectos.json`?

Un archivo que simula la respuesta de una API. Contiene un arreglo con objetos que representan cada proyecto del portafolio:

```json
[
  {
    "nombre": "Proyecto 1",
    "imagen": "proyecto-default.jpg",
    "repo": "https://github.com/usuario/proyecto",
    "tecnologias": ["React", "Bootstrap", "Vite"],
    "descripcion": "Este es el proyecto número 1..."
  }
]
```

Lo colocamos en `src/data/proyectos.json`.

---

## ⚙️ Código del componente `Proyectos.jsx` (versión sin modal)

### Puntos clave:

1. **`useEffect`**: se ejecuta una vez cuando el componente se monta.
2. **`useState`**: se usa para guardar los proyectos cargados.
3. **`props`**: se pasa `proyecto` y `onOpen` a cada tarjeta.

```jsx
import { useState, useEffect } from 'react';
import TarjetaProyecto from './TarjetaProyecto';
import proyectosData from '../data/proyectos.json';

export default function Proyectos() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    setProyectos(proyectosData); // Simula una llamada a API
  }, []);

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Mis Proyectos</h2>
      <div className="row">
        {proyectos.map((proyecto, i) => (
          <TarjetaProyecto
            key={i}
            proyecto={proyecto}
            onOpen={() => {}} // Modal desactivado por ahora
          />
        ))}
      </div>
    </section>
  );
}
```

---

## 🧩 Componente `TarjetaProyecto.jsx`

```jsx
export default function TarjetaProyecto({ proyecto, onOpen }) {
  return (
    <div className="col-md-4 mb-4">
      <div
        className="card h-100"
        onClick={() => onOpen(proyecto)} // Se usará en la próxima clase
        style={{ cursor: 'pointer' }}
      >
        <img src={proyecto.imagen} className="card-img-top" alt={proyecto.nombre} />
        <div className="card-body">
          <h5 className="card-title">{proyecto.nombre}</h5>
          <p className="card-text">{proyecto.tecnologias.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
```

---

## 🧠 Conceptos aprendidos hoy

- `props` permiten enviar datos de un componente padre a uno hijo.
- `useState` mantiene el estado local del componente.
- `useEffect` permite ejecutar lógica al montar el componente (ideal para llamadas a APIs).
- Estructura modular del frontend.
- Bootstrap facilita la maquetación responsiva.

---

## 🧪 Tareas para practicar

- Cambia los datos de uno de los proyectos en el JSON.
- Agrega más tecnologías a un proyecto y verifica cómo se muestra.
- Usa `useEffect` para simular una carga con `setTimeout`.

---

¿Listo para el modal? Será parte de la siguiente clase 😉
