import React, { useState, useEffect } from 'react';
import { FaSort, FaPlus } from 'react-icons/fa';

function ProductListing({ language, location }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    // Fetch products based on location
    fetchProducts(location);
  }, [location]);

  const fetchProducts = async (location) => {
    // Replace with actual API call
    const response = await fetch(`https://api.example.com/products?location=${location}`);
    const data = await response.json();
    setProducts(data);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
    // Implement sorting logic here
  };

  const addToCart = (product) => {
    // Implement add to cart logic here
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded mr-2"
        />
        <button onClick={() => handleSort('name')} className="p-2 bg-blue-500 text-white rounded">
          <FaSort /> Sort
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-bold mt-2">${product.price}</p>
            <button onClick={() => addToCart(product)} className="mt-2 p-2 bg-green-500 text-white rounded">
              <FaPlus /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;