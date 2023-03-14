export interface Flight {
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
    dateOfBirth: string;
    nationality: string;
}
