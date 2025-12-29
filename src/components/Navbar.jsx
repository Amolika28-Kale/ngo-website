import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const linkClass = (path) =>
    `hover:text-primary transition ${
      pathname === path ? "text-primary font-semibold" : "text-gray-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Life Success Foundation"
            className="h-9 w-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <a href="#who-we-are" className="hover:text-primary transition">
            Who We Are
          </a>
          <a href="#what-we-do" className="hover:text-primary transition">
            What We Do
          </a>
          <a href="#gallery" className="hover:text-primary transition">
            Gallery
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </nav>

        {/* DONATE BUTTON */}
        <Link
          to="/donate"
          className="hidden md:block bg-pink-600 text-black px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition"
        >
          Donate
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-primary"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4 font-medium">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block hover:text-primary"
          >
            Home
          </Link>

          <a
            href="#who-we-are"
            onClick={() => setOpen(false)}
            className="block hover:text-primary"
          >
            Who We Are
          </a>

          <a
            href="#what-we-do"
            onClick={() => setOpen(false)}
            className="block hover:text-primary"
          >
            What We Do
          </a>

          <a
            href="#gallery"
            onClick={() => setOpen(false)}
            className="block hover:text-primary"
          >
            Gallery
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block hover:text-primary"
          >
            Contact
          </a>

          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="block text-center bg-primary text-black py-3 rounded-full font-semibold hover:bg-pink-700 transition"
          >
            Donate Now
          </Link>
        </div>
      )}
    </header>
  );
}
