export interface Flight {
    arrivalDate: string;
    id: string;
    origin: string;
    destination: string;
    departureDate: string;
    returnDate?: string;
    duration: string;
    price: number;
    currency: string;
    availableSeats: number;
    layovers?: Layover[];
}

export interface Layover {
    airport: string;
    duration: string;
}

export interface Passenger {
    firstName: string;
    lastName: string;
    age: number;
    nationality: string;
    dateOfBirth?: string;
    [key: string]: any;
}
