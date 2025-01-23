import { useState } from "react";
import { useSelector } from "react-redux";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";

const AppointmentHistory = () => {
  const lawyers = useSelector((state) => state.lawyers.lawyers);
  const appointments = useSelector((state) => state.appointments.appointments);
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  const filteredAppointments = selectedLawyer
    ? appointments.filter(
        (appointment) => appointment.lawyerId === selectedLawyer.id
      )
    : appointments;

  return (
    <div className="container mx-auto mt-8 p-4 max-w-3xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Appointment History
      </h2>

      <div className="mb-6">
        <label
          htmlFor="lawyer-select"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Select a lawyer:
        </label>
        <select
          id="lawyer-select"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-azure-blue"
          onChange={(e) =>
            setSelectedLawyer(
              lawyers.find((l) => l.id === Number.parseInt(e.target.value))
            )
          }
          value={selectedLawyer?.id || ""}
        >
          <option value="">All Lawyers</option>
          {lawyers.map((lawyer) => (
            <option key={lawyer.id} value={lawyer.id}>
              {lawyer.name}
            </option>
          ))}
        </select>
      </div>

      {filteredAppointments.length > 0 ? (
        <ul className="space-y-4">
          {filteredAppointments.map((appointment) => (
            <li
              key={appointment.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {appointment.lawyerName}
                </h3>
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <CalendarIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  {new Date(appointment.date).toLocaleDateString()}
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <ClockIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  {new Date(appointment.date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600 bg-gray-100 p-4 rounded-lg">
          No appointments found.
        </p>
      )}
    </div>
  );
};

export default AppointmentHistory;
