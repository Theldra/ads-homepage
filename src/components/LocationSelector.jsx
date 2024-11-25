import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

function LocationSelector({ location, setLocation }) {
    const [availableLocations, setAvailableLocations] = useState([]);

    useEffect(() => {
        // Fetch available locations
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
        // Replace with actual API call
        const response = await fetch('https://api.example.com/locations');
        const data = await response.json();
        setAvailableLocations(data);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <div className="p-4 bg-gray-100">
            <label className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <select value={location} onChange={handleLocationChange} className="p-2 border rounded">
                    <option value="">Select a location</option>
                    {availableLocations.map(loc => (
                        <option key={loc.id} value={loc.id}>{loc.name}</option>
                    ))}
                </select>
            </label>
        </div>
    );
}

export default LocationSelector;