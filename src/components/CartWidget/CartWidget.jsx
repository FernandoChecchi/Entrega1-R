import { Link } from 'react-router-dom';
import { LuShoppingCart } from 'react-icons/lu';
import { useCart } from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { getTotalItems } = useCart();
  const total = getTotalItems();

  return (
    <Link to="/cart" className="cart-widget">
      <LuShoppingCart size={28} />
      {total > 0 && <span className="cart-count">{total}</span>}
    </Link>
  );
};

export default CartWidget;
