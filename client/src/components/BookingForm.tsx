import React, { Dispatch, SetStateAction } from 'react';
import { Passenger } from '../types';

interface BookingFormProps {
  passengers: Passenger[];
  onPassengersChange: Dispatch<SetStateAction<Passenger[]>>;
  onSubmit: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ passengers, onPassengersChange, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  const handleAddPassenger = () => {
    const newPassenger: Passenger = {
      firstName: '',
      lastName: '',
      age: 0,
      nationality: '',
    };
    onPassengersChange((passengers) => [...passengers, newPassenger]);
  };

  const handleRemovePassenger = (index: number) => {
    onPassengersChange((passengers) => {
      const newPassengers = [...passengers];
      newPassengers.splice(index, 1);
      return newPassengers;
    });
  };

  const handlePassengerChange = (index: number, field: keyof Passenger, value: string) => {
    const newPassengers = [...passengers];
    newPassengers[index][field] = value;
    onPassengersChange(newPassengers);
  };

  return (
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md px-6 py-4 mb-4">
        <h2 className="text-2xl font-bold mb-4">Book flight</h2>
        {passengers.map((passenger, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor={`firstName${index}`} className="block text-gray-700 font-bold mb-2">
                  First name
                </label>
                <input
                    id={`firstName${index}`}
                    type="text"
                    value={passenger.firstName}
                    onChange={(e) => handlePassengerChange(index, 'firstName', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor={`lastName${index}`} className="block text-gray-700 font-bold mb-2">
                  Last name
                </label>
                <input
                    id={`lastName${index}`}
                    type="text"
                    value={passenger.lastName}
                    onChange={(e) => handlePassengerChange(index, 'lastName', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor={`age${index}`} className="block text-gray-700 font-bold mb-2">
                  Age
                </label>
                <input
                    id={`age${index}`}
                    type="number"
                    min={0}
                    value={passenger.age}
                    onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor={`nationality${index}`} className="block text-gray-700 font-bold mb-2">
                  Nationality
                </label>
                <input
                    id={`nationality${index}`}
                    type="text"
                    value={passenger.nationality}
                    onChange={(e) => handlePassengerChange(index, 'nationality', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {index === passengers.length - 1 && (
                  <div className="col-span-2">
                    <button
                        type="button"
                        onClick={handleAddPassenger}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Add passenger
                    </button>
                  </div>
              )}
              {passengers.length > 1 && (
                  <div className="col-span-2">
                    <button
                        type="button"
                        onClick={() => handleRemovePassenger(index)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Remove passenger
                    </button>
                </div>
            )}
        </div>
      ))}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Confirm booking
        </button>
    </form>
  );
};

export default BookingForm;




