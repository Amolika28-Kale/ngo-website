export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Life Success Foundation
          </h3>
          <p className="text-sm">
            Helping underprivileged children, elderly people and communities
            through food, education and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Donate</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <p className="text-sm">📍 Pune, Maharashtra</p>
          <p className="text-sm">📞 +91 XXXXXXXXXX</p>
          <p className="text-sm">✉ lifesuccessfoundation@gmail.com</p>
        </div>
      </div>

      <div className="text-center text-sm border-t border-gray-700 py-4">
        © {new Date().getFullYear()} Life Success Foundation. All rights reserved.
      </div>
    </footer>
  );
}
