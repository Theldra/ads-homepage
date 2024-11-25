import React from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base mb-2">{product.description}</p>
                <p className="text-gray-900 text-xl font-bold">${product.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                    <FaStar className="text-yellow-400" />
                    <span className="ml-1 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {product.category}
                </span>
                <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
                    In Stock: {product.quantity}
                </span>
            </div>
            <div className="px-6 py-4">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full flex items-center justify-center">
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard; 