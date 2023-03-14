import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import FlightList from './components/FlightList';
import FlightDetails from './components/FlightDetails';
import BookingForm from './components/BookingForm';
import { Flight } from './types';

const App: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [passengers, setPassengers] = useState([{ firstName: '', lastName: '', age: 0, nationality: ''}]);

  const searchFlights = (searchParams: any) => {
    // Call backend API to search for flights with the given searchParams
    // Set the returned flights to the flights state
    const dummyFlights: Flight[] = [
      {
        arrivalDate: '2020-01-01',
        id: '1',
        origin: 'London',
        destination: 'New York',
        departureDate: '2020-01-01',
        duration: '10h',
        price: 100,
        currency: 'GBP',
        availableSeats: 10,
        layovers: [
            {
                airport: 'Paris',
                duration: '2h',
            },
        ],
        },
        {
            arrivalDate: '2020-01-01',
            id: '2',
            origin: 'London',
            destination: 'New York',
            departureDate: '2020-01-01',
            duration: '10h',
            price: 100,
            currency: 'GBP',
            availableSeats: 10,
            layovers: [
                {
                    airport: 'Paris',
                    duration: '2h',
                },
],
},
    ];
    setFlights(dummyFlights);
    };

  const handleFlightSelect = (flight: Flight) => {
    setSelectedFlight(flight);
  };

  const handleBookingSubmit = () => {
    // Call backend API to book the selected flight with the given passengers
    // Display a success message if the booking was successful, otherwise display an error message
    console.log('Booking submitted!');
  };

  return (
      <div className="container mx-auto px-4">
        <SearchBar onSearch={searchFlights} />
        {flights.length > 0 && (
            <>
              <FlightList flights={flights} onFlightSelect={handleFlightSelect} />
              {selectedFlight && (
                  <>
                    <FlightDetails flight={selectedFlight}   onBookFlight={handleFlightSelect} />
                      <BookingForm passengers={passengers} onSubmit={handleBookingSubmit}  onPassengersChange={setPassengers} />
                  </>
              )}
            </>
        )}
      </div>
  );
};

export default App;

