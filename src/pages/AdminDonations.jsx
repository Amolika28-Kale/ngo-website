import { useEffect, useState } from "react";

export default function AdminDonations() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        alert("Admin not logged in");
        return;
      }

      const res = await fetch("https://ngo-backend-usfc.onrender.com/api/donations", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();
      setDonations(data);
      setLoading(false);
    };

    fetchDonations();
  }, []);

  if (loading) {
    return <div className="pt-40 text-center text-xl">Loading donations...</div>;
  }

  return (
    <section className="pt-32 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Donation Records
      </h1>

      <div className="overflow-x-auto bg-white shadow-xl rounded-xl">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">Receipt</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">UPI</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {donations.map((d) => (
              <tr key={d._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold">{d.receiptNo}</td>
                <td className="px-4 py-3">{d.name}</td>
                <td className="px-4 py-3">{d.phone}</td>
                <td className="px-4 py-3 text-green-600 font-bold">
                  ₹{d.amount}
                </td>
                <td className="px-4 py-3">{d.donorUpi || "-"}</td>
                <td className="px-4 py-3">
                  {new Date(d.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
