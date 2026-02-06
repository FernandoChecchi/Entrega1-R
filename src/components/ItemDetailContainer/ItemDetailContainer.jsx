import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getProductById } from '../../data/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productNotFound, setProductNotFound] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    setProductNotFound(false);

    getProductById(itemId)
      .then(data => {
        if (data) {
          setProduct(data);
        } else {
          setProductNotFound(true);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar el producto:', error);
        setProductNotFound(true);
        setLoading(false);
      });
  }, [itemId]);

  // Redirigir a 404 si el producto no existe
  if (productNotFound && !loading) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="item-detail-container">
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Cargando detalle del producto...</p>
        </div>
      ) : product ? (
        <ItemDetail product={product} />
      ) : null}
    </div>
  );
};

export default ItemDetailContainer;
