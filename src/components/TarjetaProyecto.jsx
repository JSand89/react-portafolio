export default function TarjetaProyecto({ proyecto, onOpen }) {
  return (
    <div className="col-md-4 mb-4">
      <div
        className="card h-100"
        style={{ cursor: 'pointer' }}
        onClick={() => onOpen(proyecto)}
      >
        <img
          src={`./src/assets/${proyecto.imagen}`}
          className="card-img-top"
          alt={proyecto.nombre}
        />
        <div className="card-body">
          <h5 className="card-title">{proyecto.nombre}</h5>
          <p className="card-text">{proyecto.tecnologias.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
