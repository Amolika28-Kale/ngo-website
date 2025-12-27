import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const linkClass = (path) =>
    `hover:text-green-600 transition ${
      pathname === path ? "text-green-600 font-semibold" : ""
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-700">
          Life Success Foundation
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-medium">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <a href="#who-we-are" className="hover:text-green-600">Who We Are</a>
          <a href="#what-we-do" className="hover:text-green-600">What We Do</a>
          <Link to="/gallery" className={linkClass("/gallery")}>Gallery</Link>
          <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
        </nav>

        {/* Donate Button */}
        <Link
          to="/donate"
          className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
        >
          Donate Now
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-green-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4 font-medium">
          <a href="/" onClick={() => setOpen(false)} className="block">Home</a>
          <a href="#who-we-are" onClick={() => setOpen(false)} className="block">Who We Are</a>
          <a href="#what-we-do" onClick={() => setOpen(false)} className="block">What We Do</a>
          <Link to="/gallery" onClick={() => setOpen(false)} className="block">Gallery</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block">Contact</Link>

          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="block text-center bg-green-600 text-white py-3 rounded-full font-semibold"
          >
            Donate Now
          </Link>
        </div>
      )}
    </header>
  );
}
