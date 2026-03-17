import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../db/db';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const getProducts = async () => {
  try {
    const snapshot = await getDocs(collection(db, 'products'));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};

const getProductsByCategory = async (categoryId) => {
  try {
    const q = query(collection(db, 'products'), where('category', '==', categoryId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error al obtener productos por categoría:', error);
    throw error;
  }
};

const ItemListContainer = ({ mensaje }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [invalidCategory, setInvalidCategory] = useState(false);
  const { categoryId } = useParams();

  const validCategories = ['tinto', 'blanco', 'rosado', 'espumante'];

  useEffect(() => {
    if (categoryId && !validCategories.includes(categoryId.toLowerCase())) {
      setInvalidCategory(true);
      setLoading(false);
      return;
    }

    setInvalidCategory(false);
    setLoading(true);

    const fetchProducts = categoryId ? getProductsByCategory(categoryId) : getProducts();

    fetchProducts
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
        setLoading(false);
      });
  }, [categoryId]);

  if (invalidCategory) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="item-list-container">
      <h2>{categoryId ? `Categoría: ${categoryId}` : mensaje}</h2>

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Cargando productos...</p>
        </div>
      ) : products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <p className="no-products">No se encontraron productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
