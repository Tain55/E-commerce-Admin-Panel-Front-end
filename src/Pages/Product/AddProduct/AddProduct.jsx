/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductUploadPage = () => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    category: "",
    price: "",
    discountPrice: "",
    stock: "",
    images: [],
  });

  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Image upload handler
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Update image preview
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreview([...imagePreview, ...previews]);

    // Store images
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.productName)
      newErrors.productName = "Product name is required";
    if (!formData.price || isNaN(formData.price))
      newErrors.price = "Valid price is required";
    if (!formData.stock || isNaN(formData.stock))
      newErrors.stock = "Valid stock quantity is required";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      alert("Product Uploaded Successfully!");
    } else {
      alert("Please correct the errors in the form.");
    }
  };

  return (
    <div className="container p-4">
      <h2 className="mb-4 text-center">Product Upload</h2>
      <form onSubmit={handleSubmit} className="w-100">
        <div className="row">
          {/* Product Name */}
          <div className="col-md-12 mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              name="productName"
              className={`form-control ${
                errors.productName ? "is-invalid" : ""
              }`}
              value={formData.productName}
              onChange={handleChange}
              placeholder="Enter product name"
            />
            {errors.productName && (
              <div className="invalid-feedback">{errors.productName}</div>
            )}
          </div>

          {/* Description */}
          <div className="col-md-12 mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
            ></textarea>
          </div>

          {/* Category */}
          <div className="col-md-12 mb-3">
            <label className="form-label">Category</label>
            <select
              name="category"
              className="form-select"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="grocery">Grocery</option>
            </select>
          </div>

          {/* Pricing */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="price"
              className={`form-control ${errors.price ? "is-invalid" : ""}`}
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
            />
            {errors.price && (
              <div className="invalid-feedback">{errors.price}</div>
            )}
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Discounted Price</label>
            <input
              type="number"
              name="discountPrice"
              className="form-control"
              value={formData.discountPrice}
              onChange={handleChange}
              placeholder="Enter discounted price"
            />
          </div>

          {/* Inventory */}
          <div className="col-md-12 mb-3">
            <label className="form-label">Stock Quantity</label>
            <input
              type="number"
              name="stock"
              className={`form-control ${errors.stock ? "is-invalid" : ""}`}
              value={formData.stock}
              onChange={handleChange}
              placeholder="Enter stock quantity"
            />
            {errors.stock && (
              <div className="invalid-feedback">{errors.stock}</div>
            )}
          </div>

          {/* Image Upload */}
          <div className="col-md-12 mb-3">
            <label className="form-label">Product Images</label>
            <input
              type="file"
              className="form-control"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* Image Previews */}
          <div className="col-md-12 d-flex flex-wrap mb-3">
            {imagePreview.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`preview-${index}`}
                className="me-2 mb-2"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            ))}
          </div>

          {/* Submit Button */}
          <div className="col-md-12 text-end">
            <button type="submit" className="btn btn-primary btn-lg w-100">
              Upload Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductUploadPage;
