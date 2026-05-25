import { motion } from "framer-motion";
import { Cog, ShipWheel, Wrench } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="h-screen w-full bg-primary overflow-hidden relative flex flex-col items-center justify-center">

      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

      {/* Rotating Marine Loader */}
      <div className="relative flex items-center justify-center">

        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-52 h-52 rounded-full border-4 border-accent/30 absolute"
        />

        {/* Middle Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-40 h-40 rounded-full border-2 border-white/20 absolute"
        />

        {/* Center Propeller Animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          className="relative z-10"
        >
          <ShipWheel
            size={90}
            className="text-accent drop-shadow-[0_0_20px_rgba(255,213,79,0.5)]"
          />
        </motion.div>

        {/* Floating Engineering Icons */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="absolute -left-20"
        >
          <Cog size={34} className="text-white/50" />
        </motion.div>

        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="absolute -right-20"
        >
          <Wrench size={34} className="text-white/50" />
        </motion.div>
      </div>

      {/* Company Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1
        }}
        className="mt-14 text-center"
      >
        <span className="block text-accent text-5xl font-black tracking-wide">
          SHREE VINAYAKA
        </span>

        <span className="block text-white text-4xl font-bold mt-2 tracking-[6px]">
          PROPELLERS
        </span>
      </motion.h1>

      {/* Tagline */}
      <p className="mt-5 text-white/70 text-center text-lg">
        Manufacturing & Services of Marine Propellers
      </p>

      {/* Animated Loading Bar */}
      <div className="mt-10 w-[320px] h-3 bg-white/10 rounded-full overflow-hidden border border-white/10">

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "250%" }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-24 h-full bg-accent rounded-full shadow-[0_0_20px_rgba(255,213,79,0.8)]"
        />
      </div>

      {/* Bottom Industrial Text */}
      <div className="absolute bottom-10 text-white/30 tracking-[5px] text-sm text-center px-4">
        PRECISION ENGINEERING • QUALITY WORKMANSHIP • RELIABLE SERVICE
      </div>

      {/* Scanning Line */}
      <motion.div
        animate={{
          y: ["-100%", "100%"]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent h-40"
      />
    </div>
  );
}