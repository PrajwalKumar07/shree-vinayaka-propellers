const steps = [
  "Inspection",
  "Design",
  "Manufacturing",
  "Repair",
  "Quality Testing",
  "Delivery"
];

export default function Process() {
  return (
    <section className="py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-20">
          Engineering Process
        </h2>

        <div className="grid md:grid-cols-6 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 text-center border border-white/10"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-black font-black flex items-center justify-center mx-auto mb-5 text-2xl">
                {i + 1}
              </div>

              <h3 className="font-bold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}