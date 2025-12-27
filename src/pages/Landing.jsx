import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.jpeg";
import img6 from "../assets/images/img6.jpeg";
import img7 from "../assets/images/img7.jpeg";

export default function Landing() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        id="home"
        className="pt-36 pb-28 bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#bbf7d0,_transparent_40%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Empowering Minds, <br />
            <span className="text-green-600">Transforming Lives</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-4xl mx-auto">
            Life Success Foundation is a social empowerment NGO dedicated to
            nurturing emotional intelligence, leadership qualities, and
            value-based thinking across all age groups.
          </p>

          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            We believe true change begins from within — when individuals develop
            confidence, clarity, compassion, and purpose.
          </p>

          <div className="mt-10 flex justify-center gap-5 flex-wrap">
            <a
              href="/donate"
              className="bg-green-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-green-700 hover:scale-105 transition"
            >
              Donate Now
            </a>
            <a
              href="#who-we-are"
              className="border-2 border-green-600 text-green-600 px-10 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ================= IMPACT STATS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Our <span className="text-green-600">Impact</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Over the years, our programs have touched thousands of lives,
            fostering emotional strength, leadership, and social responsibility.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "5,000+", label: "Lives Impacted" },
            { number: "120+", label: "Programs Conducted" },
            { number: "50+", label: "Communities Served" },
            { number: "10+ Years", label: "Experience" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-gradient-to-br from-white to-green-50 border shadow hover:shadow-xl transition"
            >
              <h3 className="text-4xl font-extrabold text-green-600">
                {item.number}
              </h3>
              <p className="mt-3 text-gray-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="who-we-are" className="py-28 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-gray-800">
      Who <span className="text-green-600">We Are</span>
    </h2>

    <p className="mt-6 text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
      Life Success Foundation is a social empowerment NGO focused on emotional
      intelligence, personal development, and value-based education.
    </p>

    <p className="mt-4 text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
      Founded by <strong>Dr. Sachin Tapse</strong>, we believe that true success
      begins with a strong mindset, emotional balance, and clarity of purpose.
    </p>

    <p className="mt-4 text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
      Our work spans schools, colleges, communities, families, and senior
      citizen groups across India.
    </p>
  </div>
</section>


     
      {/* ================= IMAGE GALLERY ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Moments of <span className="text-green-600">Transformation</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
            A glimpse into our workshops, training sessions, and community
            programs that inspire positive change.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[img1, img2, img3, img4, img5, img6, img7].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={img}
                  alt="Life Success Foundation activities"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="what-we-do" className="py-28 bg-green-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900">
        What <span className="text-green-600">We Do</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
        We design and deliver impactful programs that build confidence,
        emotional strength, leadership, and life skills.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Mindset & Emotional Intelligence",
          desc: "Workshops focused on emotional awareness, self-control, confidence, and positivity."
        },
        {
          title: "Life Skills & Leadership",
          desc: "Training programs that enhance communication, decision-making, and leadership abilities."
        },
        {
          title: "Community Empowerment",
          desc: "Programs for families, senior citizens, and communities to promote mental wellness and harmony."
        }
      ].map((item, i) => (
        <div
          key={i}
          className="p-8 bg-white rounded-3xl shadow hover:shadow-xl transition"
        >
          <h3 className="text-xl font-bold text-green-600 mb-4">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= OUR APPROACH ================= */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Our <span className="text-green-600">Core Programs</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
              Our programs are designed to nurture mindset, emotional
              intelligence, leadership, and life skills across generations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "For Children",
                items: [
                  "Positive Mindset Training",
                  "Behavior & Habit Building",
                  "Confidence & Courage Work",
                  "Emotional Intelligence for Kids",
                ],
              },
              {
                title: "For Youth",
                items: [
                  "Career Clarity & Goal Setting",
                  "Personality Development",
                  "Leadership Training",
                  "Communication Mastery",
                ],
              },
              {
                title: "For Adults",
                items: [
                  "NLP & Mind Programming",
                  "Stress & Emotional Management",
                  "Life Coaching Sessions",
                  "Family & Relationship Skills",
                ],
              },
              {
                title: "For Senior Citizens",
                items: [
                  "Wellness & Mindfulness Programs",
                  "Community Support Groups",
                  "Emotional Counselling",
                  "Active Living Initiatives",
                ],
              },
            ].map((group, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition"
              >
                <h3 className="text-xl font-bold text-green-600 mb-5 text-center">
                  {group.title}
                </h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION / VISION / STORY ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              number: "01",
              text:
                "To empower individuals across all ages through emotional intelligence, NLP, and personal development, enabling meaningful and socially responsible lives.",
            },
            {
              title: "Our Vision",
              number: "02",
              text:
                "To create a compassionate, value-driven society where emotionally mature individuals uplift one another.",
            },
            {
              title: "Our Story",
              number: "03",
              text:
                "Founded by Dr. Sachin Tapse, a visionary leader dedicated to transforming society through mindset education and human values.",
            },
          ].map((box, i) => (
            <div
              key={i}
              className="p-10 rounded-3xl border bg-gradient-to-br from-white to-green-50 shadow hover:shadow-xl transition"
            >
              <span className="text-green-600 font-extrabold text-3xl">
                {box.number}.
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                {box.title}
              </h3>
              <p className="mt-5 text-gray-600 leading-relaxed">{box.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DONATE ================= */}
      <section className="py-32 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Together, We Can Change Lives
        </h2>
        <p className="mt-6 text-green-100 max-w-3xl mx-auto text-lg">
          Your donation supports education, emotional well-being, and leadership
          development programs that create long-lasting impact.
        </p>

        <a
          href="/donate"
          className="mt-10 inline-block bg-white text-green-600 px-14 py-5 rounded-full font-bold shadow-xl hover:bg-green-100 hover:scale-105 transition"
        >
          Donate Now
        </a>
      </section>
    </>
  );
}
