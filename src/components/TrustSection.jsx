import { ShieldCheck, Wrench, Clock3, Cog } from "lucide-react";

const items = [
  {
    title: "Quality Workmanship",
    icon: ShieldCheck
  },
  {
    title: "Precision Engineering",
    icon: Cog
  },
  {
    title: "Reliable Service",
    icon: Wrench
  },
  {
    title: "Timely Delivery",
    icon: Clock3
  }
];

export default function TrustSection() {
  return (
    <section className="py-20 blueprint-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="glass rounded-3xl p-8 border border-white/10"
              >
                <Icon className="text-accent mb-4" size={40} />
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}