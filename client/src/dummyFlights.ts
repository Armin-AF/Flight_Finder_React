import { Flight } from './types';

export const dummyFlights: Flight[] = [
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
        departureDate: '2023-08-01',
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
    {
        arrivalDate: '2023-08-01',
        id: '4',
        origin: 'Stockholm',
        destination: 'Amsterdam',
        departureDate: '2023-09-01',
        duration: '5h',
        price: 400,
        currency: 'EUR',
        availableSeats: 20,
        layovers: [
            {
                airport: 'Paris',
                duration: '2h',
            },
        ],
    },
    {
        arrivalDate: '2023-08-10',
        id: '5',
        origin: 'Stockholm',
        destination: 'Amsterdam',
        departureDate: '2023-08-10',
        duration: '5h',
        price: 400,
        currency: 'EUR',
        availableSeats: 20,
        layovers: [
            {
                airport: 'Paris',
                duration: '2h',
            },
        ],
    },
];

