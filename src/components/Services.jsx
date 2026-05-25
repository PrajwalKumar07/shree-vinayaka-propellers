import {
  Wrench,
  Cog,
  Settings,
  Ship,
  Hammer
} from "lucide-react";

const services = [
  {
    title: "Marine Propeller Manufacturing",
    icon: Cog
  },
  {
    title: "Propeller Repairs & Maintenance",
    icon: Wrench
  },
  {
    title: "Shaft Bend Checking",
    icon: Settings
  },
  {
    title: "Rudder & Stern Gear Works",
    icon: Ship
  },
  {
    title: "Marine Engineering Works",
    icon: Hammer
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 blueprint-bg relative"
    >
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/services-bg.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="service-card glass border border-white/10 rounded-3xl p-8"
              >
                <Icon size={52} className="text-accent mb-6" />

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}