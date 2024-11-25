import React, { useState } from 'react';
import { FaCreditCard, FaMobileAlt, FaMoneyBillWave } from 'react-icons/fa';

const PaymentOption = ({ icon, name, selected, onSelect }) => (
    <div
        className={`flex items-center p-4 border rounded-lg cursor-pointer ${selected ? 'border-green-500 bg-green-50' : 'border-gray-200'
            }`}
        onClick={onSelect}
    >
        {icon}
        <span className="ml-3 font-medium">{name}</span>
    </div>
);

const Payment = () => {
    const [selectedMethod, setSelectedMethod] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically process the payment
        console.log(`Processing payment of $${amount} via ${selectedMethod}`);
        // Reset form
        setSelectedMethod('');
        setAmount('');
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Payment</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                        Amount ($)
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Select Payment Method</h3>
                    <div className="space-y-3">
                        <PaymentOption
                            icon={<FaCreditCard className="text-2xl text-blue-500" />}
                            name="Credit Card"
                            selected={selectedMethod === 'credit'}
                            onSelect={() => setSelectedMethod('credit')}
                        />
                        <PaymentOption
                            icon={<FaMobileAlt className="text-2xl text-green-500" />}
                            name="Mobile Money"
                            selected={selectedMethod === 'mobile'}
                            onSelect={() => setSelectedMethod('mobile')}
                        />
                        <PaymentOption
                            icon={<FaMoneyBillWave className="text-2xl text-yellow-500" />}
                            name="Cash on Delivery"
                            selected={selectedMethod === 'cash'}
                            onSelect={() => setSelectedMethod('cash')}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    disabled={!selectedMethod || !amount}
                >
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default Payment;