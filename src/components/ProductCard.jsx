const ProductCard = ({ image, title, price, delivery }) => (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">₹ {price}</p>
        <p className="product-delivery">Earliest Delivery: {delivery}</p>
      </div>
    </div>
  );
  export default ProductCard;