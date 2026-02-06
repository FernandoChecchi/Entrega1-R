import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Página no encontrada</h2>
        <p className="error-message">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="error-illustration">
          <img src="/favicon.png" alt="VinoShop" className="error-icon" />
        </div>
        <Link to="/" className="back-home-button">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
