// components/Layout.js
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/booking" className="hover:underline">Booking</Link></li>
          <li><Link to="/insurance" className="hover:underline">Insurance</Link></li>
          <li><Link to="/login" className="hover:underline">Login</Link></li>
          <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
        </ul>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}

export default Layout;