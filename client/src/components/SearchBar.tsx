import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (searchParams: SearchParams) => void;
}

interface SearchParams {
    departure: string;
    arrival: string;
    departureDate: string;
    returnDate?: string;
    passengers: {
        adults: number;
        children: number;
    };
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const searchParams: SearchParams = {
            departure,
            arrival,
            departureDate,
            passengers: { adults, children },
        };

        if (returnDate) {
            searchParams.returnDate = returnDate;
        }

        onSearch(searchParams);
    };

    return (
        <form onSubmit={handleSearch} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="departure" className="block text-gray-700 font-bold mb-2">
                        Departure
                    </label>
                    <input
                        id="departure"
                        type="text"
                        placeholder="Departure airport"
                        value={departure}
                        onChange={(e) => setDeparture(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="arrival" className="block text-gray-700 font-bold mb-2">
                        Arrival
                    </label>
                    <input
                        id="arrival"
                        type="text"
                        placeholder="Arrival airport"
                        value={arrival}
                        onChange={(e) => setArrival(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label htmlFor="departure-date" className="block text-gray-700 font-bold mb-2">
                        Departure date
                    </label>
                    <input
                        id="departure-date"
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="return-date" className="block text-gray-700 font-bold mb-2">
                        Return date (optional)
                    </label>
                    <input
                        id="return-date"
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow -outline"
                    />
    </div>
  </div>

  <div className="grid grid-cols-2 gap-4 mt-4">
    <div>
      <label htmlFor="adults" className="block text-gray-700 font-bold mb-2">
        Adults (12+)
      </label>
      <input
        id="adults"
        type="number"
        min={1}
        value={adults}
        onChange={(e) => setAdults(parseInt(e.target.value))}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div>
      <label htmlFor="children" className="block text-gray-700 font-bold mb-2">
        Children
      </label>
      <input
        id="children"
        type="number"
        min={0}
        value={children}
        onChange={(e) => setChildren(parseInt(e.target.value))}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  </div>

  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
    Search flights
  </button>
</form>
);
};

export default SearchBar;
