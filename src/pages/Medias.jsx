import { useState, useEffect } from 'react';
import API from '../services/api';
import Swal from 'sweetalert2';

function Medias() {
  const [medias, setMedias] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [directores, setDirectores] = useState([]);
  const [productoras, setProductoras] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [form, setForm] = useState({
    serial: '', titulo: '', sinopsis: '', url: '',
    imagen: '', anioEstreno: '', genero: '',
    director: '', productora: '', tipo: ''
  });
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    cargarMedias();
    cargarOpciones();
  }, []);

  const cargarMedias = async () => {
    try {
      const respuesta = await API.get('/medias');
      setMedias(respuesta.data);
    } catch (error) {
      console.error('Error al cargar medias:', error);
    }
  };

  const cargarOpciones = async () => {
    try {
      const [g, d, p, t] = await Promise.all([
        API.get('/generos'),
        API.get('/directores'),
        API.get('/productoras'),
        API.get('/tipos')
      ]);
      setGeneros(g.data.filter(x => x.estado === 'Activo'));
      setDirectores(d.data.filter(x => x.estado === 'Activo'));
      setProductoras(p.data.filter(x => x.estado === 'Activo'));
      setTipos(t.data);
    } catch (error) {
      console.error('Error al cargar opciones:', error);
    }
  };

  const manejarCambio = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      if (editandoId) {
        await API.put(`/medias/${editandoId}`, form);
        Swal.fire('Actualizado', 'Película actualizada correctamente', 'success');
      } else {
        await API.post('/medias', form);
        Swal.fire('Creado', 'Película creada correctamente', 'success');
      }
      setForm({ serial: '', titulo: '', sinopsis: '', url: '', imagen: '', anioEstreno: '', genero: '', director: '', productora: '', tipo: '' });
      setEditandoId(null);
      cargarMedias();
    } catch (error) {
      Swal.fire('Error', 'No se pudo guardar la película', 'error');
    }
  };

  const editar = (media) => {
    setForm({
      serial: media.serial,
      titulo: media.titulo,
      sinopsis: media.sinopsis || '',
      url: media.url,
      imagen: media.imagen || '',
      anioEstreno: media.anioEstreno || '',
      genero: media.genero?._id || media.genero,
      director: media.director?._id || media.director,
      productora: media.productora?._id || media.productora,
      tipo: media.tipo?._id || media.tipo
    });
    setEditandoId(media._id);
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
        await API.delete(`/medias/${id}`);
        Swal.fire('Eliminado', 'Película eliminada correctamente', 'success');
        cargarMedias();
      } catch (error) {
        Swal.fire('Error', 'No se pudo eliminar la película', 'error');
      }
    }
  };

  return (
    <div>
      <h2 className="page-title">Gestión de Contenido</h2>
<form onSubmit={manejarEnvio} className="card-custom">
        <h5>{editandoId ? 'Editar Película' : 'Nueva Película'}</h5>
        <div className="row">
          <div className="col-md-6 mb-2">
            <label>Serial</label>
            <input type="text" name="serial" className="form-control" value={form.serial} onChange={manejarCambio} required />
          </div>
          <div className="col-md-6 mb-2">
            <label>Título</label>
            <input type="text" name="titulo" className="form-control" value={form.titulo} onChange={manejarCambio} required />
          </div>
          <div className="col-md-6 mb-2">
            <label>URL</label>
            <input type="text" name="url" className="form-control" value={form.url} onChange={manejarCambio} required />
          </div>
          <div className="col-md-6 mb-2">
            <label>Imagen</label>
            <input type="text" name="imagen" className="form-control" value={form.imagen} onChange={manejarCambio} />
          </div>
          <div className="col-md-6 mb-2">
            <label>Año de Estreno</label>
            <input type="number" name="anioEstreno" className="form-control" value={form.anioEstreno} onChange={manejarCambio} />
          </div>
          <div className="col-md-6 mb-2">
            <label>Género</label>
            <select name="genero" className="form-control" value={form.genero} onChange={manejarCambio} required>
              <option value="">Seleccionar...</option>
              {generos.map(g => <option key={g._id} value={g._id}>{g.nombre}</option>)}
            </select>
          </div>
          <div className="col-md-6 mb-2">
            <label>Director</label>
            <select name="director" className="form-control" value={form.director} onChange={manejarCambio} required>
              <option value="">Seleccionar...</option>
              {directores.map(d => <option key={d._id} value={d._id}>{d.nombres}</option>)}
            </select>
          </div>
          <div className="col-md-6 mb-2">
            <label>Productora</label>
            <select name="productora" className="form-control" value={form.productora} onChange={manejarCambio} required>
              <option value="">Seleccionar...</option>
              {productoras.map(p => <option key={p._id} value={p._id}>{p.nombre}</option>)}
            </select>
          </div>
          <div className="col-md-6 mb-2">
            <label>Tipo</label>
            <select name="tipo" className="form-control" value={form.tipo} onChange={manejarCambio} required>
              <option value="">Seleccionar...</option>
              {tipos.map(t => <option key={t._id} value={t._id}>{t.nombre}</option>)}
            </select>
          </div>
          <div className="col-12 mb-2">
            <label>Sinopsis</label>
            <textarea name="sinopsis" className="form-control" value={form.sinopsis} onChange={manejarCambio} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">{editandoId ? 'Actualizar' : 'Guardar'}</button>
        {editandoId && (
          <button type="button" className="btn btn-secondary ms-2" onClick={() => { setEditandoId(null); setForm({ serial: '', titulo: '', sinopsis: '', url: '', imagen: '', anioEstreno: '', genero: '', director: '', productora: '', tipo: '' }); }}>
            Cancelar
          </button>
        )}
      </form>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr><th>Serial</th><th>Título</th><th>Año</th><th>Género</th><th>Tipo</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          {medias.map((media) => (
            <tr key={media._id}>
              <td>{media.serial}</td>
              <td>{media.titulo}</td>
              <td>{media.anioEstreno}</td>
              <td>{media.genero?.nombre}</td>
              <td>{media.tipo?.nombre}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => editar(media)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => eliminar(media._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Medias;