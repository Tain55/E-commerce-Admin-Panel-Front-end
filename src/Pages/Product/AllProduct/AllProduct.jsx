import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Handle delete product
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    alert(`Product with ID ${id} deleted!`);
  };

  // Handle update product
  const handleUpdate = (id) => {
    alert(`Redirect to Update Product page for ID ${id}`);
    // Navigate to update page
    navigate(`/update-product/${id}`);
  };

  // Handle Add Product redirection
  const handleAddProduct = () => {
    navigate("/add-product");
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Product List</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <ProductCard
                product={product}
                onDelete={() => handleDelete(product.id)}
                onUpdate={() => handleUpdate(product.id)}
              />
            </div>
          ))
        ) : (
          <p className="text-center">Loading products...</p>
        )}
      </div>

      {/* Add Product Button */}
      <button
        className="btn btn-primary rounded-circle position-fixed"
        style={{
          bottom: "30px",
          right: "30px",
          width: "60px",
          height: "60px",
          fontSize: "24px",
        }}
        onClick={handleAddProduct}
        title="Add Product"
      >
        +
      </button>
    </div>
  );
};

export default AllProduct;
