const ProductCard = ({ product, onDelete, onUpdate }) => {
  return (
    <div className="card h-100 shadow-sm">
      {/* Product Image */}
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        {/* Product Info */}
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-truncate">{product.description}</p>
        <p className="mb-1">
          <strong>Price:</strong> ${product.price}
        </p>
        <p className="mb-1">
          <strong>Category:</strong> {product.category}
        </p>

        {/* Action Buttons */}
        <div className="mt-auto d-flex justify-content-between">
          <button className="btn btn-danger btn-sm" onClick={onDelete}>
            Delete
          </button>
          <button className="btn btn-warning btn-sm" onClick={onUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
