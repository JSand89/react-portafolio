import { Modal, Button } from 'react-bootstrap';

export default function ProyectoModal({ proyecto, show, onClose }) {
  if (!proyecto) return null;

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{proyecto.nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{proyecto.descripcion}</p>
        <h6>Tecnologías utilizadas:</h6>
        <ul>
          {proyecto.tecnologias.map((tec, index) => (
            <li key={index}>{tec}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cerrar</Button>
        <Button variant="primary" href={proyecto.repo} target="_blank" rel="noopener noreferrer">
          Ver repositorio
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
