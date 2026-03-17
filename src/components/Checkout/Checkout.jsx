import { useState } from 'react';
import { collection, addDoc, updateDoc, doc, Timestamp } from 'firebase/firestore';
import { useCart } from '../../context/CartContext';
import db from '../../db/db';
import './Checkout.css';

const initialForm = { name: '', email: '', emailConfirm: '', phone: '' };

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);


  if (cartItems.length === 0 && !orderId) {
    return (
      <div className="checkout-empty-container">
        <div className="checkout-empty">
          <span className="checkout-empty-icon">🛒</span>
          <h2>Tu carrito está vacío</h2>
          <p>Agregá productos antes de continuar con el checkout.</p>
          <a href="/" className="btn-primary">Ver productos</a>
        </div>
      </div>
    );
  }


  if (orderId) {
    return (
      <div className="order-confirm-container">
        <div className="order-confirm">
          <span className="order-confirm-icon">🎉</span>
          <h2>¡Compra realizada con éxito!</h2>
          <p>Tu pedido fue registrado. Guardá tu código de orden:</p>
          <div className="order-id-box">
            <span className="order-id-label">Número de orden</span>
            <strong className="order-id">{orderId}</strong>
          </div>
          <p className="order-id-hint">
            Te enviaremos la confirmación a <em>{form.email}</em>.
          </p>
          <a href="/" className="btn-primary">Volver a la tienda</a>
        </div>
      </div>
    );
  }

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'El nombre es requerido.';
    if (!form.email.trim()) {
      newErrors.email = 'El email es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'El email no es válido.';
    }
    if (form.email !== form.emailConfirm) {
      newErrors.emailConfirm = 'Los emails no coinciden.';
    }
    if (!form.phone.trim()) newErrors.phone = 'El teléfono es requerido.';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const order = {
      buyer: {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
      },
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: getTotalPrice(),
      date: Timestamp.now(),
    };

    try {
      // 1. Guardar la orden en Firestore
      const ordersCollection = collection(db, 'orders');
      const docRef = await addDoc(ordersCollection, order);

      // 2. Actualizar el stock de cada producto comprado
      await Promise.all(
        cartItems.map(item =>
          updateDoc(doc(db, 'products', item.id), {
            stock: item.stock - item.quantity,
          })
        )
      );

      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al procesar la orden:', error);
      setErrors({ submit: 'Hubo un error al procesar tu compra. Intentá nuevamente.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Finalizar compra</h2>

      <div className="checkout-layout">

        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <h3 className="form-section-title">Datos del comprador</h3>

          <div className="form-group">
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ej: Juan García"
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="emailConfirm">Confirmar email</label>
            <input
              type="email"
              id="emailConfirm"
              name="emailConfirm"
              value={form.emailConfirm}
              onChange={handleChange}
              placeholder="tu@email.com"
              className={errors.emailConfirm ? 'input-error' : ''}
            />
            {errors.emailConfirm && <span className="error-msg">{errors.emailConfirm}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Ej: 11-4567-8901"
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          {errors.submit && (
            <div className="submit-error">{errors.submit}</div>
          )}

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? (
              <span className="btn-loading">
                <span className="spinner" /> Procesando...
              </span>
            ) : (
              'Confirmar compra'
            )}
          </button>
        </form>

        <div className="checkout-summary">
          <h3 className="summary-title">Resumen del pedido</h3>

          <div className="summary-items">
            {cartItems.map(item => (
              <div key={item.id} className="summary-item">
                <img src={item.image} alt={item.name} className="summary-item-image" />
                <div className="summary-item-info">
                  <span className="summary-item-name">{item.name}</span>
                  <span className="summary-item-qty">x{item.quantity}</span>
                </div>
                <span className="summary-item-subtotal">
                  ${(item.price * item.quantity).toLocaleString('es-AR')}
                </span>
              </div>
            ))}
          </div>

          <div className="summary-divider" />

          <div className="summary-total-row">
            <span>Total</span>
            <span className="summary-total-price">
              ${getTotalPrice().toLocaleString('es-AR')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
