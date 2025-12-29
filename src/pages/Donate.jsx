import { useState } from "react";
import jsPDF from "jspdf";
import logo from "../assets/images/logo.png";
import qr from "../assets/images/QR.jpeg";

export default function Donate() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    date: new Date().toLocaleDateString(),
    name: "",
    email: "",
    address: "",
    pan: "",
    phone: "",
    representative: "",
    donorUpi: "",
    amount: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= SAVE TO BACKEND ================= */
  const saveDonation = async () => {
    const payload = {
      ...form,
      amount: Number(form.amount)
    };

    const res = await fetch("https://ngo-backend-usfc.onrender.com/api/donations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error("Failed to save donation");
    return res.json();
  };

  /* ================= DOWNLOAD RECEIPT ================= */
  const downloadReceipt = async () => {
    if (!form.name || !form.phone || !form.amount) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    let savedDonation;
    try {
      savedDonation = await saveDonation();
    } catch {
      alert("Backend error. Donation not saved.");
      setLoading(false);
      return;
    }

    const cleanAmount = Number(form.amount);
    const doc = new jsPDF("p", "mm", "a4");

    /* HEADER */
    doc.addImage(logo, "PNG", 15, 10, 40, 22);
    doc.setFontSize(16);
    doc.text("LIFE SUCCESS FOUNDATION", 70, 18);
    doc.setFontSize(10);
    doc.text("CARE • CREATE • PROVIDE • PROTECT", 70, 24);
    doc.setFontSize(9);
    doc.text("Reg No: NGO MH1418/08 F15985B", 70, 30);
    doc.line(10, 36, 200, 36);

    /* RECEIPT INFO */
    doc.setFontSize(11);
    doc.text(`Receipt No: ${savedDonation.receiptNo}`, 15, 45);
    doc.text(`Date: ${form.date}`, 150, 45);

    /* DONOR DETAILS */
    let y = 60;
    const gap = 9;

    doc.text(`Name: ${form.name}`, 15, y); y += gap;
    doc.text(`Email: ${form.email || "-"}`, 15, y); y += gap;
    doc.text(`Address: ${form.address || "-"}`, 15, y); y += gap;
    doc.text(`PAN No: ${form.pan || "-"}`, 15, y); y += gap;
    doc.text(`Contact No: ${form.phone}`, 15, y); y += gap;
    doc.text(`Donor UPI ID: ${form.donorUpi || "-"}`, 15, y); y += gap;
    doc.text(`Representative Name: ${form.representative || "-"}`, 15, y); y += gap;
    doc.text(`Amount Paid: INR ${cleanAmount.toFixed(2)}`, 15, y); y += gap;
    doc.text(`Payment Mode: UPI`, 15, y);

    doc.line(10, y + 8, 200, y + 8);

    /* FOOTER */
    doc.setFontSize(9);
    doc.text(
      "This is a system generated receipt. No signature required.",
      15,
      y + 20
    );

    doc.save(`Donation_Receipt_${savedDonation.receiptNo}.pdf`);
    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-emerald-50 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Branding */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Support a Better Future</h1>
          <p className="text-gray-500 mt-2 text-lg">Your contribution makes a world of difference.</p>
        </div>
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.12)] overflow-hidden grid md:grid-cols-2">

          {/* LEFT */}
          <div className="bg-gradient-to-br from-pink-600 to-emerald-600 p-12 text-white text-center">
            <h2 className="text-4xl font-extrabold mb-4 tracking-wide">
              Scan & Pay
            </h2>

            <p className="text-pink-100 mb-8 text-lg">
              Donate securely using any UPI app
            </p>

            <img
              src={qr}
              alt="UPI QR"
              className="mx-auto w-64 bg-white p-4 rounded-2xl shadow-2xl hover:scale-105 transition"
            />

            <p className="mt-8 text-sm opacity-90">
              Google Pay • PhonePe • Paytm • BHIM
            </p>
          </div>

          {/* RIGHT */}
          <div className="p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Donor Details
            </h3>
            <p className="text-gray-500 mb-8">
              Please ensure details are accurate for receipt generation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" placeholder="Full Name *" className="input" onChange={handleChange} />
              <input name="email" placeholder="Email" className="input" onChange={handleChange} />
              <input name="address" placeholder="Address" className="input md:col-span-2" onChange={handleChange} />
              <input name="pan" placeholder="PAN Number" className="input" onChange={handleChange} />
              <input name="phone" placeholder="Contact Number *" className="input" onChange={handleChange} />
              <input name="donorUpi" placeholder="Your UPI ID (optional)" className="input" onChange={handleChange} />
              <input name="representative" placeholder="Representative Name" className="input" onChange={handleChange} />
              <input name="amount" placeholder="Donation Amount *" className="input" onChange={handleChange} />
            </div>

            <button
              onClick={downloadReceipt}
              disabled={loading}
              className={`mt-10 w-full py-4 rounded-xl font-bold text-lg text-white
              bg-gradient-to-r from-pink-600 to-rose-600
              hover:shadow-xl hover:scale-[1.02] transition
              ${loading && "opacity-70 cursor-not-allowed"}`}
            >
              {loading ? "Processing..." : "I Have Paid – Download Receipt"}
            </button>

            <p className="text-xs text-gray-400 mt-4 text-center">
              Complete UPI payment before downloading receipt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
