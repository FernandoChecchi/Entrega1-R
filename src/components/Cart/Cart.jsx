import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeItem, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-container">
        <div className="cart-empty">
          <span className="cart-empty-icon">🛒</span>
          <h2>Tu carrito está vacío</h2>
          <p>Todavía no agregaste ningún producto.</p>
          <Link to="/" className="btn-primary">Ver productos</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Tu Carrito</h2>

      <div className="cart-layout">

        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />

              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-category">{item.category}</p>
                <p className="cart-item-price">Precio unitario: <strong>${item.price.toLocaleString('es-AR')}</strong></p>


                <div className="cart-item-quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    title="Disminuir cantidad"
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    disabled={item.quantity >= item.stock}
                    title="Aumentar cantidad"
                  >
                    +
                  </button>
                  <span className="qty-stock">Stock: {item.stock}</span>
                </div>
              </div>

              <div className="cart-item-right">
                <p className="cart-item-subtotal">
                  ${(item.price * item.quantity).toLocaleString('es-AR')}
                </p>
                <button
                  className="btn-remove"
                  onClick={() => removeItem(item.id)}
                  title="Eliminar producto"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>


        <div className="cart-summary">
          <h3 className="summary-title">Resumen del pedido</h3>

          <div className="summary-row">
            <span>Productos ({getTotalItems()} unidades)</span>
          </div>

          {cartItems.map(item => (
            <div key={item.id} className="summary-product-row">
              <span className="summary-product-name">{item.name} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toLocaleString('es-AR')}</span>
            </div>
          ))}

          <div className="summary-divider" />

          <div className="summary-total-row">
            <span>Total</span>
            <span className="summary-total-price">${getTotalPrice().toLocaleString('es-AR')}</span>
          </div>

          <Link to="/checkout" className="btn-checkout">
            Finalizar compra
          </Link>

          <button className="btn-clear" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
