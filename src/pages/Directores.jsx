import { useState, useEffect } from 'react';
import API from '../services/api';
import Swal from 'sweetalert2';

function Directores() {
  const [directores, setDirectores] = useState([]);
  const [form, setForm] = useState({ nombres: '', estado: 'Activo' });
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => { cargarDirectores(); }, []);

  const cargarDirectores = async () => {
    try {
      const respuesta = await API.get('/directores');
      setDirectores(respuesta.data);
    } catch (error) {
      console.error('Error al cargar directores:', error);
    }
  };

  const manejarCambio = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      if (editandoId) {
        await API.put(`/directores/${editandoId}`, form);
        Swal.fire('Actualizado', 'Director actualizado correctamente', 'success');
      } else {
        await API.post('/directores', form);
        Swal.fire('Creado', 'Director creado correctamente', 'success');
      }
      setForm({ nombres: '', estado: 'Activo' });
      setEditandoId(null);
      cargarDirectores();
    } catch (error) {
      Swal.fire('Error', 'No se pudo guardar el director', 'error');
    }
  };

  const editar = (director) => {
    setForm({ nombres: director.nombres, estado: director.estado });
    setEditandoId(director._id);
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
        await API.delete(`/directores/${id}`);
        Swal.fire('Eliminado', 'Director eliminado correctamente', 'success');
        cargarDirectores();
      } catch (error) {
        Swal.fire('Error', 'No se pudo eliminar el director', 'error');
      }
    }
  };

  return (
    <div>
      <h2 className="page-title">Gestión de Directores</h2>
<form onSubmit={manejarEnvio} className="card-custom">
        <h5>{editandoId ? 'Editar Director' : 'Nuevo Director'}</h5>
        <div className="mb-2">
          <label>Nombres</label>
          <input type="text" name="nombres" className="form-control" value={form.nombres} onChange={manejarCambio} required />
        </div>
        <div className="mb-2">
          <label>Estado</label>
          <select name="estado" className="form-control" value={form.estado} onChange={manejarCambio}>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">{editandoId ? 'Actualizar' : 'Guardar'}</button>
        {editandoId && (
          <button type="button" className="btn btn-secondary ms-2" onClick={() => { setEditandoId(null); setForm({ nombres: '', estado: 'Activo' }); }}>
            Cancelar
          </button>
        )}
      </form>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr><th>Nombres</th><th>Estado</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          {directores.map((director) => (
            <tr key={director._id}>
              <td>{director.nombres}</td>
              <td>{director.estado}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => editar(director)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => eliminar(director._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Directores;