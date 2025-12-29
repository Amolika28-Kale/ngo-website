import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Donate from "./pages/Donate";
import AdminLogin from "./pages/AdminLogin";
import AdminDonations from "./pages/AdminDonations";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ---------- Admin Route Protection ---------- */
const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin/login" />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ---------- PUBLIC ROUTES ---------- */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Landing />
              <Footer />
            </>
          }
        />

        <Route
          path="/donate"
          element={
            <>
              <Navbar />
              <Donate />
              <Footer />
            </>
          }
        />

        {/* ---------- ADMIN ROUTES ---------- */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/donations"
          element={
            <AdminRoute>
              <AdminDonations />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
