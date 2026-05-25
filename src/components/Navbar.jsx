import { motion } from "framer-motion";
import logo from "../assets/logo2.jpeg";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full glass border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2 sm:gap-4">
          <img
            src={logo}
            className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
          />

          <div>
            <h1 className="font-bold text-[11px] sm:text-sm sm:text-lg lg:text-xl text-accent">
              SHREE VINAYAKA PROPELLERS
            </h1>

            <p className="text-[11px] sm:text-sm text-white/70">
              Manufacturing & Services of Marine Propellers
            </p>
          </div>
        </div>

      </div>
    </motion.nav>
  );
}