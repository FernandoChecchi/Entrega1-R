import { LuShoppingCart } from "react-icons/lu";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <LuShoppingCart size={40} />

      <span className="cart-count">3</span>
    </div>
  )
}

export default CartWidget
