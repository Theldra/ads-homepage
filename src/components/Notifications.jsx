import React from 'react';
import { FaBell, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Notification = ({ type, message, time }) => {
    const iconClass = "text-2xl mr-3";
    let icon;
    let bgColor;

    switch (type) {
        case 'success':
            icon = <FaCheckCircle className={`${iconClass} text-green-500`} />;
            bgColor = 'bg-green-100';
            break;
        case 'warning':
            icon = <FaExclamationCircle className={`${iconClass} text-yellow-500`} />;
            bgColor = 'bg-yellow-100';
            break;
        default:
            icon = <FaBell className={`${iconClass} text-blue-500`} />;
            bgColor = 'bg-blue-100';
    }

    return (
        <div className={`flex items-center p-4 mb-4 rounded-lg ${bgColor}`}>
            {icon}
            <div className="flex-1">
                <p className="font-semibold">{message}</p>
                <p className="text-sm text-gray-600">{time}</p>
            </div>
        </div>
    );
};

const Notifications = () => {
    const notifications = [
        { type: 'success', message: 'Your order has been shipped!', time: '2 hours ago' },
        { type: 'warning', message: 'Stock running low on tomatoes', time: '1 day ago' },
        { type: 'info', message: 'New product added: Organic Apples', time: '3 days ago' },
    ];

    return (
        <div className="max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            {notifications.map((notification, index) => (
                <Notification key={index} {...notification} />
            ))}
        </div>
    );
};

export default Notifications;