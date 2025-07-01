import { useState, useEffect } from 'react';
import TarjetaProyecto from './TarjetaProyecto';
import proyectosData from '../../proyectos.json';

export default function Proyectos() {
  const [proyectos, setProyectos] = useState([]);
  
  useEffect(() => {
    // Simulamos una carga de datos como si vinieran de una API
    setProyectos(proyectosData);
  }, []);
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Mis Proyectos</h2>
      <div className="row">
        {proyectos.map((proyecto, i) => (
          <TarjetaProyecto
            key={i}
            proyecto={proyecto}
            onOpen={() => {}} // ← No hace nada por ahora
          />
        ))}
      </div>
    </section>
  );
}
