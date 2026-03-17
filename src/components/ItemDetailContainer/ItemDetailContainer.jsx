import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../db/db';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const getProductById = async (itemId) => {
  try {
    const docRef = doc(db, 'products', itemId);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    throw error;
  }
};

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
