import { useState, useEffect } from 'react';
import API from '../services/api';
import Swal from 'sweetalert2';

function Productoras() {
  const [productoras, setProductoras] = useState([]);
  const [form, setForm] = useState({ nombre: '', estado: 'Activo', slogan: '', descripcion: '' });
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => { cargarProductoras(); }, []);

  const cargarProductoras = async () => {
    try {
      const respuesta = await API.get('/productoras');
      setProductoras(respuesta.data);
    } catch (error) {
      console.error('Error al cargar productoras:', error);
    }
  };

  const manejarCambio = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      if (editandoId) {
        await API.put(`/productoras/${editandoId}`, form);
        Swal.fire('Actualizado', 'Productora actualizada correctamente', 'success');
      } else {
        await API.post('/productoras', form);
        Swal.fire('Creado', 'Productora creada correctamente', 'success');
      }
      setForm({ nombre: '', estado: 'Activo', slogan: '', descripcion: '' });
      setEditandoId(null);
      cargarProductoras();
    } catch (error) {
      Swal.fire('Error', 'No se pudo guardar la productora', 'error');
    }
  };

  const editar = (productora) => {
    setForm({ nombre: productora.nombre, estado: productora.estado, slogan: productora.slogan || '', descripcion: productora.descripcion || '' });
    setEditandoId(productora._id);
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
        await API.delete(`/productoras/${id}`);
        Swal.fire('Eliminado', 'Productora eliminada correctamente', 'success');
        cargarProductoras();
      } catch (error) {
        Swal.fire('Error', 'No se pudo eliminar la productora', 'error');
      }
    }
  };

  return (
    <div>
      <h2 className="page-title">Gestión de Productoras</h2>
<form onSubmit={manejarEnvio} className="card-custom">
        <h5>{editandoId ? 'Editar Productora' : 'Nueva Productora'}</h5>
        <div className="mb-2">
          <label>Nombre</label>
          <input type="text" name="nombre" className="form-control" value={form.nombre} onChange={manejarCambio} required />
        </div>
        <div className="mb-2">
          <label>Estado</label>
          <select name="estado" className="form-control" value={form.estado} onChange={manejarCambio}>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
        <div className="mb-2">
          <label>Slogan</label>
          <input type="text" name="slogan" className="form-control" value={form.slogan} onChange={manejarCambio} />
        </div>
        <div className="mb-2">
          <label>Descripción</label>
          <textarea name="descripcion" className="form-control" value={form.descripcion} onChange={manejarCambio} />
        </div>
        <button type="submit" className="btn btn-primary">{editandoId ? 'Actualizar' : 'Guardar'}</button>
        {editandoId && (
          <button type="button" className="btn btn-secondary ms-2" onClick={() => { setEditandoId(null); setForm({ nombre: '', estado: 'Activo', slogan: '', descripcion: '' }); }}>
            Cancelar
          </button>
        )}
      </form>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr><th>Nombre</th><th>Estado</th><th>Slogan</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          {productoras.map((productora) => (
            <tr key={productora._id}>
              <td>{productora.nombre}</td>
              <td>{productora.estado}</td>
              <td>{productora.slogan}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => editar(productora)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => eliminar(productora._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productoras;