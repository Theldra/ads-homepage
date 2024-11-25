import React, { useState } from 'react';
import { FaEdit, FaSave } from 'react-icons/fa';

function UserProfile() {
    // Mock user data
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        avatar: "https://via.placeholder.com/150" // Placeholder avatar
    });

    const [isEditing, setIsEditing] = useState(false);

    // Handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Updated User:", user);
        setIsEditing(false); // Exit editing mode
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>

            {/* Avatar and user details */}
            <div className="flex items-center mb-6">
                <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full border-2 border-gray-300"
                />
                <div className="ml-4">
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                </div>
            </div>

            {/* Form to edit details */}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        disabled={!isEditing} // Enable when editing
                        className={`w-full p-2 border rounded ${isEditing ? "bg-white" : "bg-gray-100"
                            }`}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        disabled={!isEditing} // Enable when editing
                        className={`w-full p-2 border rounded ${isEditing ? "bg-white" : "bg-gray-100"
                            }`}
                    />
                </div>

                {/* Toggle between Save and Edit buttons */}
                {isEditing ? (
                    <button
                        type="submit"
                        className="p-2 bg-green-500 text-white rounded flex items-center"
                    >
                        <FaSave className="mr-2" /> Save
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => setIsEditing(true)}
                        className="p-2 bg-blue-500 text-white rounded flex items-center"
                    >
                        <FaEdit className="mr-2" /> Edit
                    </button>
                )}
            </form>
        </div>
    );
}

export default UserProfile;
