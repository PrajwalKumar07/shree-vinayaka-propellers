import logo from "../assets/logo1.png";

export default function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden pt-16 pb-10 border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -top-40 right-0" />

      {/* Blueprint Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Logo Section */}
        <div>

          <img
            src={logo}
            alt="Shree Vinayaka Propellers"
            className="w-28 mb-5 object-contain drop-shadow-[0_0_20px_rgba(255,213,79,0.25)]"
          />

          <h3 className="font-black text-2xl text-accent leading-tight">
            SHREE VINAYAKA
            <span className="block text-white">
              PROPELLERS
            </span>
          </h3>

          <p className="text-white/60 mt-5 leading-7">
            Manufacturing & Services of Marine Propellers
            with trusted marine engineering solutions in Mangalore.
          </p>

        </div>

        {/* Services */}
        <div>

          <h4 className="font-bold text-sm sm:text-lg lg:text-xl mb-5 text-accent">
            Services
          </h4>

          <ul className="space-y-3 text-white/70">

            <li className="hover:text-accent transition">
              Marine Propeller Manufacturing
            </li>

            <li className="hover:text-accent transition">
              Propeller Repairs & Maintenance
            </li>

            <li className="hover:text-accent transition">
              Shaft Bend Checking
            </li>

            <li className="hover:text-accent transition">
              Rudder & Stern Gear Works
            </li>

            <li className="hover:text-accent transition">
              Marine Engineering Works
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h4 className="font-bold text-sm sm:text-lg lg:text-xl mb-5 text-accent">
            Contact
          </h4>

          <ul className="space-y-4 text-white/70">

            <li>
              Keerthan Devadiga
              <br />
              <span className="text-white">
                6363818018
              </span>
            </li>

            <li>
              Sagar Konchady
              <br />
              <span className="text-white">
                8792312602
              </span>
            </li>

            <li>
              Mulihithlu,
              <br />
              Mangalore - 575001
            </li>

          </ul>

        </div>

        {/* GST & Email */}
        <div>

          <h4 className="font-bold text-sm sm:text-lg lg:text-sm sm:text-lg lg:text-xl mb-5 text-accent">
            Company Info
          </h4>

          <div className="space-y-5 text-white/70">

            <div>
              <p className="text-white font-semibold mb-1">
                GSTIN
              </p>

              <p>
                29AFRFS1609F1ZO
              </p>
            </div>

            <div>
              <p className="text-white font-semibold mb-1">
                Email
              </p>

              <p className="break-all">
                shreevinayakapropellers@gmail.com
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-white/40 text-sm text-center md:text-left">
          © 2026 SHREE VINAYAKA PROPELLERS.
          All Rights Reserved.
        </p>

        <p className="text-accent/70 text-sm tracking-[3px] text-center">
          PRECISION • QUALITY • RELIABILITY
        </p>

      </div>

    </footer>
  );
}