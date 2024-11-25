import React, { useState } from 'react';
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';

const Product = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(Math.max(1, parseInt(e.target.value)));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <img className="w-full rounded-lg shadow-lg" src={product.image} alt={product.name} />
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400 mr-2">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'} />
                            ))}
                        </div>
                        <span className="text-gray-600">({product.reviews} reviews)</span>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-2xl font-bold text-green-600 mb-4">${product.price.toFixed(2)}</p>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            min="1"
                        />
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
                            <FaShoppingCart className="mr-2" />
                            Add to Cart
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
                            <FaHeart className="mr-2" />
                            Add to Wishlist
                        </button>
                    </div>
                    <div className="border-t pt-4">
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">Category:</span> {product.category}
                        </p>
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">Available Stock:</span> {product.quantity}
                        </p>
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">Seller:</span> {product.seller}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;