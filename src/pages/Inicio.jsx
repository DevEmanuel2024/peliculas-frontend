import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';

function Inicio() {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    API.get('/medias')
      .then(res => setMedias(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <div className="banner">
        <h1>IU<span style={{ color: '#ffffff' }}>DIGITAL</span> CINE</h1>
        <p>Panel de administración — Institución Universitaria Digital de Antioquia</p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Link to="/medias" style={{ backgroundColor: '#7c3aed', color: 'white', padding: '10px 25px', borderRadius: '8px', textDecoration: 'none', border: '2px solid #a78bfa' }}>Ver Películas</Link>
          <Link to="/generos" style={{ backgroundColor: '#7c3aed', color: 'white', padding: '10px 25px', borderRadius: '8px', textDecoration: 'none', border: '2px solid #a78bfa' }}>Generos</Link>
        </div>
      </div>

      <h2 className="page-title">Películas y Series</h2>
      {medias.length === 0 ? (
        <p style={{ color: '#aaaaaa' }}>No hay películas registradas aún.</p>
      ) : (
        <div className="row">
          {medias.map(media => (
            <div className="col-md-3 mb-4" key={media._id}>
              <div className="media-card">
                <img
                  src={media.imagen || 'https://placehold.co/300x200?text=Sin+imagen'}
                  alt={media.titulo}
                  onError={(e) => { e.target.src = 'https://placehold.co/300x200?text=Sin+imagen'; }}
                />
                <div className="media-card-body">
                  <div className="media-card-title">{media.titulo}</div>
                  <div className="media-card-info">
                    {media.anioEstreno} • {media.genero?.nombre} • {media.tipo?.nombre}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Inicio;