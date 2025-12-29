// Existing gallery images
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.jpeg";
import img6 from "../assets/images/img6.jpeg";
import img7 from "../assets/images/img7.jpeg";

// AI generated images
import whoWeAreImg from "../assets/images/indian-meetings.png";
import whatWeDoImg from "../assets/images/wellness-program.png";
import programsImg from "../assets/images/womens.png";
import missionImg from "../assets/images/childrens.png";

export default function Landing() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        id="home"
        className="pt-36 pb-28 bg-gradient-to-br from-pink-50 via-white to-pink-100"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-pink-100 text-pink-700 font-semibold">
              🌱 Empowering Society Since 2014
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
              Empowering Minds,
              <span className="text-pink-600 block">Transforming Lives</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Life Success Foundation is dedicated to building a brighter,
              compassionate future by empowering individuals—from children to
              senior citizens—through human values, growth, and community support.
            </p>

            <div className="mt-10 flex gap-6 flex-wrap">
              <a
                href="/donate"
                className="bg-pink-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-pink-700 transition"
              >
                Donate Now
              </a>
              <a
                href="#who-we-are"
                className="border-2 border-pink-600 text-pink-600 px-10 py-4 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition"
              >
                Know More
              </a>
            </div>
          </div>

          <img
            src={missionImg}
            alt="Hero"
            className="rounded-3xl shadow-2xl object-cover w-full h-[420px]"
          />
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section id="who-we-are" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src={whoWeAreImg}
            alt="Who We Are"
            className="rounded-3xl shadow-xl object-cover w-full h-[420px]"
          />

          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Who <span className="text-pink-600">We Are</span>
            </h2>

            <p className="text-gray-600 text-lg mb-4">
              Life Success Foundation is a social empowerment organization
              committed to transforming individuals and communities.
            </p>

            <p className="text-gray-600 text-lg mb-6">
              Founded by <strong>Dr. Sachin Tapse</strong>, our work blends
              emotional intelligence, NLP, empathy, and value-based education—
              especially during early childhood.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li>✔ Emotional Intelligence & NLP programs</li>
              <li>✔ Children, youth, adults & seniors</li>
              <li>✔ Value-driven social transformation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section id="gallery" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Moments of <span className="text-pink-600">Transformation</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[img1, img2, img3, img4, img5, img6, img7].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-64 object-cover hover:scale-110 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section id="what-we-do" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              What <span className="text-pink-600">We Do</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We empower individuals and communities through education, care,
              emotional intelligence, and NLP-based transformation.
            </p>
          </div>

          <img
            src={whatWeDoImg}
            alt="What We Do"
            className="rounded-3xl shadow-xl object-cover w-full h-[420px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            ["We Find & Fund", "Supporting deserving individuals and initiatives."],
            ["We Build Networks", "Connecting families, educators, and leaders."],
            ["We Strengthen", "Empowering minds through EI & NLP."],
            ["We Educate", "Workshops & value-based education."],
            ["We Provide Care", "Emotional & social support for all ages."],
            ["We Consult", "Expert guidance through NLP & counselling."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="bg-pink-50 p-8 rounded-3xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-pink-600 mb-3">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CORE PROGRAMS ================= */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-14">
          <h2 className="text-4xl font-bold">
            Our <span className="text-pink-600">Core Programs</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Children – Emotional Intelligence",
            "Youth – Career & Leadership",
            "Adults – NLP & Stress Management",
            "Senior Citizens – Wellness Support",
          ].map((title, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow text-center"
            >
              <h3 className="font-bold text-pink-600">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section
        className="py-28 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${missionImg})` }}
      >
        <div className="absolute inset-0 bg-white/90"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            ["Our Mission", "Empowering lives through EI, NLP & values."],
            ["Our Vision", "A compassionate, emotionally aware society."],
            ["Our Story", "Founded by Dr. Sachin Tapse to transform minds."],
          ].map(([title, text], i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow">
              <h3 className="text-2xl font-bold text-pink-600">{title}</h3>
              <p className="mt-4 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-28 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Get in <span className="text-pink-600">Touch</span>
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Reach out for programs, workshops, collaborations, or support.
        </p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          <a
            href="tel:+919175647042"
            className="bg-pink-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-pink-700 transition"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919175647042"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-pink-600 text-pink-600 px-10 py-4 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>

      {/* ================= DONATE ================= */}
      <section className="py-32 bg-gradient-to-r from-pink-600 to-emerald-600 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Together, We Can Change Lives
        </h2>

        <p className="mt-6 text-pink-100 max-w-3xl mx-auto text-lg">
          Your contribution helps us reach more lives and build a better future.
        </p>

        <a
          href="/donate"
          className="mt-10 inline-block bg-white text-pink-600 px-14 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition"
        >
          Donate Now
        </a>
      </section>
    </>
  );
}
