import React from 'react';
import { Flight } from './types';

interface FlightDetailsProps {
    flight: Flight;
    onBookFlight: () => void;
}

const FlightDetails: React.FC<FlightDetailsProps> = ({ flight, onBookFlight }) => {
    const handleBookFlight = () => {
        onBookFlight();
    };

    return (
        <div className="bg-white rounded-lg shadow-md px-6 py-4 mb-4">
            <h2 className="text-2xl font-bold mb-2">
                {flight.departureDate} - {flight.arrivalDate}
            </h2>
            <p className="text-gray-700 mb-2">
                {flight.departureDate} - {flight.arrivalDate}
            </p>
            <p className="text-gray-700 mb-2">{flight.price} USD</p>
            <button
                onClick={handleBookFlight}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Book flight
            </button>
        </div>
    );
};

export default FlightDetails;
