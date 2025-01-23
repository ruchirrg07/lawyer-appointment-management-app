import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookAppointment } from "../store/appointmentsSlice";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const BookAppointment = () => {
  const lawyers = useSelector((state) => state.lawyers.lawyers);
  const appointments = useSelector((state) => state.appointments.appointments);
  const dispatch = useDispatch();
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [bookingComplete, setBookingComplete] = useState(false);

  useEffect(() => {
    if (selectedLawyer && selectedDate) {
      const bookedSlots = appointments
        .filter(
          (appointment) =>
            appointment.lawyerId === selectedLawyer.id &&
            appointment.date.startsWith(selectedDate)
        )
        .map((appointment) => appointment.date.split("T")[1]);

      const allSlots = generateTimeSlots();
      const available = allSlots.filter((slot) => !bookedSlots.includes(slot));
      setAvailableTimeSlots(available);
    }
  }, [selectedLawyer, selectedDate, appointments]);

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        slots.push(time);
      }
    }
    return slots;
  };

  const handleBooking = () => {
    if (selectedLawyer && selectedDate && selectedTime) {
      const appointment = {
        id: Date.now(),
        lawyerId: selectedLawyer.id,
        lawyerName: selectedLawyer.name,
        date: `${selectedDate}T${selectedTime}`,
      };
      dispatch(bookAppointment(appointment));
      setBookingComplete(true);
    }
  };

  const resetBooking = () => {
    setSelectedLawyer(null);
    setSelectedDate("");
    setSelectedTime("");
    setBookingComplete(false);
  };

  if (bookingComplete) {
    return (
      <div className="container mx-auto mt-8 p-4 max-w-2xl text-center">
        <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500" />
        <h2 className="mt-6 text-3xl font-bold text-gray-900">
          Appointment Booked Successfully!
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Thank you for booking an appointment with {selectedLawyer.name}. We
          look forward to assisting you with your legal matters.
        </p>
        <p className="mt-4 text-md text-gray-600">
          Date: {new Date(selectedDate).toLocaleDateString()}
          <br />
          Time: {selectedTime}
        </p>
        <button
          onClick={resetBooking}
          className="mt-8 rounded-md bg-azure-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure-blue"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 p-4 max-w-3xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Book an Appointment
      </h2>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            1. Select a Lawyer
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lawyers.map((lawyer) => (
              <div
                key={lawyer.id}
                className={`border p-4 rounded-lg cursor-pointer transition-all ${
                  selectedLawyer?.id === lawyer.id
                    ? "border-azure-blue bg-azure-blue bg-opacity-10"
                    : "border-gray-200 hover:border-azure-blue hover:bg-gray-50"
                }`}
                onClick={() => setSelectedLawyer(lawyer)}
              >
                <h4 className="text-lg font-medium text-gray-800">
                  {lawyer.name}
                </h4>
                <p className="text-sm text-gray-600">
                  Specialties: {lawyer.specialties.join(", ")}
                </p>
                <p className="text-sm text-gray-600">
                  Cost: ${lawyer.cost} per appointment
                </p>
              </div>
            ))}
          </div>
        </section>

        {selectedLawyer && (
          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              2. Select a Date
            </h3>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-azure-blue"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
          </section>
        )}

        {selectedLawyer && selectedDate && (
          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              3. Select a Time
            </h3>
            {availableTimeSlots.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {availableTimeSlots.map((time) => (
                  <button
                    key={time}
                    className={`p-2 rounded-md text-sm ${
                      selectedTime === time
                        ? "bg-azure-blue text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">
                No available time slots for the selected date.
              </p>
            )}
          </section>
        )}

        {selectedLawyer && selectedDate && selectedTime && (
          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              4. Confirm Booking
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>
                <strong>Lawyer:</strong> {selectedLawyer.name}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(selectedDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {selectedTime}
              </p>
              <p>
                <strong>Cost:</strong> ${selectedLawyer.cost}
              </p>
            </div>
            <button
              className="mt-4 w-full bg-azure-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-azure-blue focus:ring-opacity-50"
              onClick={handleBooking}
            >
              Book Appointment
            </button>
          </section>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
