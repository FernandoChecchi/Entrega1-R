import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Item.css';

const Item = ({ id, name, image, price, stock }) => {
  const { cartItems } = useCart();


  const inCartQty = cartItems.find(i => i.id === id)?.quantity ?? 0;
  const availableStock = stock - inCartQty;

  return (
    <div className="item-card">
      <img src={image} alt={name} className="item-image" />
      <div className="item-info">
        <h3 className="item-name">{name}</h3>
        <p className="item-price">${price.toLocaleString('es-AR')}</p>

        {availableStock <= 0 ? (
          <p className="item-stock item-stock-empty">Sin stock disponible</p>
        ) : (
          <p className="item-stock">
            Stock: {availableStock} unidades
            {inCartQty > 0 && <span className="item-stock-cart"> ({inCartQty} en carrito)</span>}
          </p>
        )}

        <Link to={`/item/${id}`} className="item-detail-link">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
