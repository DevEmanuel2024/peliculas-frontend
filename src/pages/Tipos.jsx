import { useState, useEffect } from 'react';
import API from '../services/api';
import Swal from 'sweetalert2';

function Tipos() {
  const [tipos, setTipos] = useState([]);
  const [form, setForm] = useState({ nombre: '', descripcion: '' });
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => { cargarTipos(); }, []);

  const cargarTipos = async () => {
    try {
      const respuesta = await API.get('/tipos');
      setTipos(respuesta.data);
    } catch (error) {
      console.error('Error al cargar tipos:', error);
    }
  };

  const manejarCambio = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      if (editandoId) {
        await API.put(`/tipos/${editandoId}`, form);
        Swal.fire('Actualizado', 'Tipo actualizado correctamente', 'success');
      } else {
        await API.post('/tipos', form);
        Swal.fire('Creado', 'Tipo creado correctamente', 'success');
      }
      setForm({ nombre: '', descripcion: '' });
      setEditandoId(null);
      cargarTipos();
    } catch (error) {
      Swal.fire('Error', 'No se pudo guardar el tipo', 'error');
    }
  };

  const editar = (tipo) => {
    setForm({ nombre: tipo.nombre, descripcion: tipo.descripcion || '' });
    setEditandoId(tipo._id);
  };

  const eliminar = async (id) => {
    const confirmacion = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });
    if (confirmacion.isConfirmed) {
      try {
        await API.delete(`/tipos/${id}`);
        Swal.fire('Eliminado', 'Tipo eliminado correctamente', 'success');
        cargarTipos();
      } catch (error) {
        Swal.fire('Error', 'No se pudo eliminar el tipo', 'error');
      }
    }
  };

  return (
    <div>
      <h2 className="page-title">Gestión de Tipos</h2>
<form onSubmit={manejarEnvio} className="card-custom">
        <h5>{editandoId ? 'Editar Tipo' : 'Nuevo Contenido'}</h5>
        <div className="mb-2">
          <label>Nombre</label>
          <input type="text" name="nombre" className="form-control" value={form.nombre} onChange={manejarCambio} required />
        </div>
        <div className="mb-2">
          <label>Descripción</label>
          <textarea name="descripcion" className="form-control" value={form.descripcion} onChange={manejarCambio} />
        </div>
        <button type="submit" className="btn btn-primary">{editandoId ? 'Actualizar' : 'Guardar'}</button>
        {editandoId && (
          <button type="button" className="btn btn-secondary ms-2" onClick={() => { setEditandoId(null); setForm({ nombre: '', descripcion: '' }); }}>
            Cancelar
          </button>
        )}
      </form>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr><th>Nombre</th><th>Descripción</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          {tipos.map((tipo) => (
            <tr key={tipo._id}>
              <td>{tipo.nombre}</td>
              <td>{tipo.descripcion}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => editar(tipo)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => eliminar(tipo._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tipos;