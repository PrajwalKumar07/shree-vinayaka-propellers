const items = [
  "Experienced Marine Work",
  "Precision Equipment",
  "Quality Materials",
  "Fast Service",
  "Customer Satisfaction"
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-primary">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-14">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="glass border border-white/10 rounded-3xl p-8 text-2xl font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}