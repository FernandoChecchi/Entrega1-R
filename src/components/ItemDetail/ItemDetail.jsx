import { useState } from 'react';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    alert(`Se agregarán ${quantity} unidades de ${product.name} al carrito`);
  };

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
          <p className="item-detail-price">${product.price}</p>
          <p className="item-detail-stock">Stock disponible: {product.stock}</p>
        </div>

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
            disabled={quantity >= product.stock}
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="add-to-cart-button"
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? 'Sin Stock' : 'Agregar al Carrito'}
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
