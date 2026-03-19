import { useState, useEffect } from "react";
import API from "../services/api";
import Swal from "sweetalert2";

function Generos() {
  const [generos, setGeneros] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    estado: "Activo",
    descripcion: "",
  });
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    cargarGeneros();
  }, []);

  const cargarGeneros = async () => {
    try {
      const respuesta = await API.get("/generos");
      setGeneros(respuesta.data);
    } catch (error) {
      console.error("Error al cargar géneros:", error);
    }
  };

  const manejarCambio = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      if (editandoId) {
        await API.put(`/generos/${editandoId}`, form);
        Swal.fire("Actualizado", "Género actualizado correctamente", "success");
      } else {
        await API.post("/generos", form);
        Swal.fire("Creado", "Género creado correctamente", "success");
      }
      setForm({ nombre: "", estado: "Activo", descripcion: "" });
      setEditandoId(null);
      cargarGeneros();
    } catch (error) {
      Swal.fire("Error", "No se pudo guardar el género", "error");
    }
  };

  const editar = (genero) => {
    setForm({
      nombre: genero.nombre,
      estado: genero.estado,
      descripcion: genero.descripcion || "",
    });
    setEditandoId(genero._id);
  };

  const eliminar = async (id) => {
    const confirmacion = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirmacion.isConfirmed) {
      try {
        await API.delete(`/generos/${id}`);
        Swal.fire("Eliminado", "Género eliminado correctamente", "success");
        cargarGeneros();
      } catch (error) {
        Swal.fire("Error", "No se pudo eliminar el género", "error");
      }
    }
  };

  return (
    <div>
      <h2 className="page-title">Gestión de Géneros</h2>
      <form onSubmit={manejarEnvio} className="card-custom">
        <h5>{editandoId ? 'Editar Director' : 'Nuevo Genero'}</h5>
        <div className="mb-2">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={form.nombre}
            onChange={manejarCambio}
            required
          />
        </div>
        <div className="mb-2">
          <label>Estado</label>
          <select
            name="estado"
            className="form-control"
            value={form.estado}
            onChange={manejarCambio}
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
        <div className="mb-2">
          <label>Descripción</label>
          <textarea
            name="descripcion"
            className="form-control"
            value={form.descripcion}
            onChange={manejarCambio}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editandoId ? "Actualizar" : "Guardar"}
        </button>
        {editandoId && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => {
              setEditandoId(null);
              setForm({ nombre: "", estado: "Activo", descripcion: "" });
            }}
          >
            Cancelar
          </button>
        )}
      </form>

      <table className="table tabla-custom">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {generos.map((genero) => (
            <tr key={genero._id}>
              <td>{genero.nombre}</td>
              <td>{genero.estado}</td>
              <td>{genero.descripcion}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editar(genero)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminar(genero._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Generos;
