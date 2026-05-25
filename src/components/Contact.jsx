import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}
`;

    const whatsappUrl =
      `https://wa.me/918792312602?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-secondary to-primary"
    >

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-5xl font-black mb-8">
            Contact Us
          </h2>

          <div className="space-y-6 text-lg text-white/80">

            <p>
              <strong>Location:</strong><br />
              Near Fisheries Federation Ltd.,
              Mulihithlu, Mangalore - 575001
            </p>

            <p>
              <strong>Email:</strong><br />
              shreevinayakapropellers@gmail.com
            </p>

            <p>
              <strong>GSTIN:</strong><br />
              29AFRFS1609F1ZO
            </p>

  <div className="space-y-5">

  <a
    href="tel:6363818018"
    className="block bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-accent/40 transition group"
  >

  

    <p className="text-white/70 text-lg">
      Keerthan Devadiga
    </p>

    <h3 className="text-3xl font-black text-accent tracking-wide mt-2 group-hover:scale-[1.02] transition">
      6363818018
    </h3>

  </a>

  <a
    href="tel:8792312602"
    className="block bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-accent/40 transition group"
  >

   

    <p className="text-white/70 text-lg">
      Sagar Konchady
    </p>

    <h3 className="text-3xl font-black text-accent tracking-wide mt-2 group-hover:scale-[1.02] transition">
      8792312602
    </h3>

  </a>

</div>

          </div>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl"
        >

          <div className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
            />

            <input
              type="text"
              name="service"
              placeholder="Service Required"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
            />

            <button
              type="submit"
              className="w-full bg-accent text-black px-8 py-4 rounded-xl font-bold hover:scale-[1.02] transition"
            >
              Send Inquiry on WhatsApp
            </button>

          </div>

        </form>

      </div>

    </section>
  );
}