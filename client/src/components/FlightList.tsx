import React from 'react';
import { Flight } from '../types';

interface FlightListProps {
    flights: Flight[];
    onFlightSelect: (flight: Flight) => void;
}

const FlightList: React.FC<FlightListProps> = ({ flights, onFlightSelect }) => {
    const handleFlightSelect = (flight: Flight) => {
        onFlightSelect(flight);
    };

    return (
        <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Available flights</h2>
            {flights.map((flight) => (
                <div key={flight.id} className="bg-white rounded-lg shadow-md px-6 py-4 cursor-pointer mb-4 hover:bg-blue-50 transition duration-200 ease-in-out" onClick={() => handleFlightSelect(flight)}>
                    <h3 className="font-bold text-lg mb-2">
                        {flight.departureDate} - {flight.arrivalDate}
                    </h3>
                    <p className="text-gray-700 mb-2">
                        {flight.origin} - {flight.destination}
                    </p>
                    <p className="text-gray-700">{flight.price} {flight.currency}</p>
                    <p className="text-gray-500 text-sm">Duration: {flight.duration}</p>
                </div>
            ))}
        </div>
    );

};
export default FlightList;
