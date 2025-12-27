import { useState } from "react";

export default function Donate() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: 500,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all details");
      return;
    }

    const options = {
      key: "RAZORPAY_KEY_ID", // 🔴 replace with your Razorpay key
      amount: form.amount * 100, // paise
      currency: "INR",
      name: "Life Success Foundation",
      description: "Donation for Social Impact",
      handler: function (response) {
        alert("Payment Successful!");
        console.log(response);
        // 👉 later you can send this to backend
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      theme: {
        color: "#16a34a",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <section className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
          
          {/* LEFT INFO */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-10 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Support a Meaningful Cause
            </h2>
            <p className="text-green-100 leading-relaxed">
              Your contribution helps empower individuals through emotional
              intelligence, NLP training, and human value development.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              <li>✔ 100% Secure Payment</li>
              <li>✔ NGO Transparency</li>
              <li>✔ Impact-driven Programs</li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Donation Details
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                onChange={handleChange}
              />

              <input
                type="number"
                name="amount"
                placeholder="Donation Amount (₹)"
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                value={form.amount}
                onChange={handleChange}
              />
            </div>

            <button
              onClick={handlePayment}
              className="mt-8 w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg"
            >
              Donate with Razorpay
            </button>

            <p className="text-xs text-gray-400 mt-4 text-center">
              By donating, you agree to our terms & conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
