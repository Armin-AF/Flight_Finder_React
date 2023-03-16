import React, {useEffect, useState} from 'react';
import SearchBar from './components/SearchBar';
import FlightList from './components/FlightList';
import FlightDetails from './components/FlightDetails';
import BookingForm from './components/BookingForm';
import { Flight } from './types';


const App: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [passengers, setPassengers] = useState([{ firstName: '', lastName: '', age: 0, nationality: ''}]);
  const [message, setMessage] = useState('fill in the form to search for flights');

    useEffect(() => {
        if (flights.length > 0) {
            setMessage('Select a flight to book');
        } else {
            setMessage('No flights found');
        }
    }, [flights]);


  const searchFlights = (searchParams: any) => {
      console.log('searchParams:', searchParams);
      // Call backend API to search for flights with the given searchParams
    // Set the returned flights to the flights state
    const dummyFlights: Flight[] = [
      {
        arrivalDate: '2023-05-01',
        id: '1',
        origin: 'Amsterdam',
        destination: 'Stockholm',
        departureDate: '2023-06-01',
        duration: '5h',
        price: 100,
        currency: 'EUR',
        availableSeats: 10,
        layovers: [
            {
                airport: 'Paris',
                duration: '2h',
            },
        ],
        },
        {
            arrivalDate: '2023-06-01',
            id: '2',
            origin: 'Stockholm',
            destination: 'Oslo',
            departureDate: '2023-07-01',
            duration: '10h',
            price: 200,
            currency: 'EUR',
            availableSeats: 40,
            layovers: [
                {
                    airport: 'Paris',
                    duration: '2h',
                },
            ],
        },
        {
            arrivalDate: '2023-07-01',
            id: '3',
            origin: 'Oslo',
            destination: 'Stockholm',
            departureDate: '2020-08-01',
            duration: '10h',
            price: 300,
            currency: 'EUR',
            availableSeats: 30,
            layovers: [
                {
                    airport: 'Paris',
                    duration: '4h',
                },
            ],
                },
    ];
      // Filter dummy flights based on the searchParams
      const filteredFlights = dummyFlights.filter((flight) => {
          return (
              flight.origin === searchParams.departure &&
              flight.destination === searchParams.arrival &&
              flight.departureDate === searchParams.departureDate &&
              flight.availableSeats >= searchParams.passengers.adults + searchParams.passengers.children
          );
      });
      console.log("Input Departure Date: ", searchParams.departureDate);
      console.log("Origin in dummyFlights: ", dummyFlights[0].origin);
      console.log("Input Passengers: ", searchParams.passengers);
      console.log("Input Origin: ", searchParams.departure);
      console.log("Input Destination: ", searchParams.arrival);

      console.log(filteredFlights);

      if (filteredFlights.length === 0) {
          // No flights match the search parameters
          setFlights([]);
          console.log('No flights match the search parameters');
      } else {
          setFlights(filteredFlights);
      }
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
        <h1 className="text-4xl font-bold text-center my-8">Flight Booker</h1>
        <p className="text-center">{message}</p>
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

