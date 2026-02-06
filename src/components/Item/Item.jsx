import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, image, price, stock }) => {
  return (
    <div className="item-card">
      <img src={image} alt={name} className="item-image" />
      <div className="item-info">
        <h3 className="item-name">{name}</h3>
        <p className="item-price">${price}</p>
        <p className="item-stock">Stock: {stock} unidades</p>
        <Link to={`/item/${id}`} className="item-detail-link">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
