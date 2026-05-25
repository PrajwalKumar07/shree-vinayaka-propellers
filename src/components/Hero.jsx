import { motion } from "framer-motion";
import {
  Phone,
  ShipWheel,
  Anchor,
  Waves,
  Cog
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary via-[#10294d] to-secondary flex items-center"
    >

      {/* Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px"
          }}
        />
      </div>

      {/* Background Glow */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [-20, 20, -20]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[700px] h-[700px] bg-accent/10 rounded-full blur-3xl -right-40 -top-40"
      />

      {/* Floating Decorative Icons */}
      <motion.div
        animate={{
          y: [-15, 15, -15]
        }}
        transition={{
          duration: 5,
          repeat: Infinity
        }}
        className="absolute top-32 left-10 text-accent/20"
      >
        <Anchor size={120} />
      </motion.div>

      <motion.div
        animate={{
          y: [15, -15, 15]
        }}
        transition={{
          duration: 6,
          repeat: Infinity
        }}
        className="absolute bottom-20 left-24 text-accent/10"
      >
        <Cog size={100} />
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-28 pb-20">

        {/* LEFT CONTENT */}
        <div>

          {/* Label */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 rounded-full border border-accent/20 bg-accent/10 text-accent text-xs sm:text-sm font-semibold mb-8"
          >
            MARINE ENGINEERING & PROPELLER SERVICES
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 60
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1
            }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            Precision Marine
            <span className="text-accent block">
              Propeller Engineering
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{
              opacity: 0,
              y: 40
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.3,
              duration: 1
            }}
            className="mt-8 text-sm sm:text-lg lg:text-sm sm:text-lg lg:text-xl text-white/75 leading-9 max-w-2xl"
          >
            Trusted Manufacturing, Repair & Marine Engineering
            Solutions in Mangalore with precision workmanship,
            reliable service, and industrial expertise.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.5,
              duration: 1
            }}
            className="flex gap-5 mt-10 flex-wrap"
          >

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -4
              }}
              whileTap={{
                scale: 0.95
              }}
              href="tel:6363818018"
              className="bg-accent text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-[0_10px_30px_rgba(255,213,79,0.3)]"
            >
              <Phone size={22} />
              Call Now
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -4
              }}
              href="#contact"
              className="border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold"
            >
              Get Quote
            </motion.a>

          </motion.div>

          {/* Stats */}
         <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-12 sm:mt-16">

  {[
    {
      value: "100%",
      label: "Quality"
    },
    {
      value: "Marine",
      label: "Expertise"
    },
    {
      value: "Fast",
      label: "Service"
    }
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{
        opacity: 0,
        y: 30
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: index * 0.2 + 0.6
      }}
      whileHover={{
        scale: 1.03,
        y: -6
      }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-6 text-center relative overflow-hidden"
    >

      {/* Shine */}
      <motion.div
        animate={{
          x: ["-100%", "250%"]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: index
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <h3 className="text-lg xs:text-xl sm:text-4xl font-black text-accent leading-tight">
        {item.value}
      </h3>

      <p className="text-white/70 mt-1 sm:mt-2 text-[11px] xs:text-xs sm:text-base leading-tight">
        {item.label}
      </p>

    </motion.div>
  ))}

</div>

        </div>

        {/* RIGHT SIDE INDUSTRIAL ANIMATION */}
        <div className="relative flex items-center justify-center">

          {/* Outer Ring */}
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-[450px] h-[450px] rounded-full border border-accent/20"
          />

          {/* Middle Ring */}
          <motion.div
            animate={{
              rotate: -360
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-[320px] h-[320px] rounded-full border border-white/10"
          />

          {/* Glow Circle */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
            className="absolute w-[260px] h-[260px] bg-accent/20 rounded-full blur-3xl"
          />

          {/* Main Wheel */}
          <motion.div
            animate={{
              rotate: 360,
              y: [-10, 10, -10]
            }}
            transition={{
              rotate: {
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative z-10"
          >
            <ShipWheel
              size={220}
              className="text-accent drop-shadow-[0_0_40px_rgba(255,213,79,0.45)]"
            />
          </motion.div>

          {/* Floating Waves */}
          <motion.div
            animate={{
              x: [-20, 20, -20]
            }}
            transition={{
              duration: 5,
              repeat: Infinity
            }}
            className="absolute bottom-0"
          >
            <Waves
              size={120}
              className="text-accent/40"
            />
          </motion.div>

        </div>

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-primary to-transparent"></div>

    </section>
  );
}