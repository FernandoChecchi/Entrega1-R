import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, cartItems } = useCart();


  const inCartQuantity = cartItems.find(i => i.id === product.id)?.quantity ?? 0;
  const availableStock = product.stock - inCartQuantity;

  const handleIncrement = () => {
    if (quantity < availableStock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
  };

  if (product.stock === 0) {
    return (
      <div className="item-detail">
        <div className="item-detail-image-container">
          <img src={product.image} alt={product.name} className="item-detail-image" />
        </div>
        <div className="item-detail-info">
          <h2 className="item-detail-name">{product.name}</h2>
          <p className="item-detail-category">Categoría: {product.category}</p>
          <p className="item-detail-description">{product.description}</p>
          <div className="item-detail-price-stock">
            <p className="item-detail-price">${product.price.toLocaleString('es-AR')}</p>
            <p className="item-detail-stock no-stock">⚠️ Producto sin stock</p>
          </div>
          <div className="added-actions">
            <button className="add-to-cart-button" disabled style={{ flex: 1 }}>
              Sin Stock
            </button>
            <Link to="/" className="btn-keep-shopping">
              Seguir comprando
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="item-detail">
      <div className="item-detail-image-container">
        <img src={product.image} alt={product.name} className="item-detail-image" />
      </div>

      <div className="item-detail-info">
        <h2 className="item-detail-name">{product.name}</h2>
        <p className="item-detail-category">Categoría: {product.category}</p>
        <p className="item-detail-description">{product.description}</p>

        <div className="item-detail-price-stock">
          <p className="item-detail-price">${product.price.toLocaleString('es-AR')}</p>
          <p className="item-detail-stock">
            Stock disponible: {availableStock}
            {inCartQuantity > 0 && (
              <span className="stock-in-cart"> ({inCartQuantity} en tu carrito)</span>
            )}
          </p>
        </div>


        {availableStock <= 0 ? (
          <div className="added-to-cart">
            <p className="added-message stock-maxed">⚠️ Ya agregaste todo el stock disponible al carrito.</p>
            <div className="added-actions">
              <Link to="/cart" className="btn-go-cart">
                Ir al carrito
              </Link>
              <Link to="/" className="btn-keep-shopping">
                Seguir comprando
              </Link>
            </div>
          </div>
        ) : !added ? (
          <>
            <div className="item-detail-counter">
              <button
                onClick={handleDecrement}
                className="counter-button"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="counter-value">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="counter-button"
                disabled={quantity >= availableStock}
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="add-to-cart-button"
            >
              Agregar al Carrito
            </button>
          </>
        ) : (
          <div className="added-to-cart">
            <p className="added-message">✅ ¡Producto agregado al carrito!</p>
            <div className="added-actions">
              <Link to="/cart" className="btn-go-cart">
                Ir al carrito
              </Link>
              <Link to="/" className="btn-keep-shopping">
                Seguir comprando
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
