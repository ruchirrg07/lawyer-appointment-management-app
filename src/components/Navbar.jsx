import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-azure-blue text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Pearson Specter Litt
        </Link>
        <div className="space-x-4">
          <Link to="/book" className="hover:underline">
            Book Appointment
          </Link>
          <Link to="/history" className="hover:underline">
            Appointment History
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
