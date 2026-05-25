import { motion } from "framer-motion";
import {
  Wrench,
  Cog,
  ShipWheel,
  ShieldCheck,
  Waves,
  Anchor
} from "lucide-react";

const featureCards = [
  {
    icon: Cog,
    title: "Precision Engineering",
    animation: {
      y: [-8, 8, -8]
    }
  },
  {
    icon: Wrench,
    title: "Marine Repairs",
    animation: {
      x: [-6, 6, -6]
    }
  },
  {
    icon: ShieldCheck,
    title: "Quality Service",
    animation: {
      scale: [1, 1.06, 1]
    }
  },
  {
    icon: Anchor,
    title: "Marine Expertise",
    animation: {
      rotate: [-2, 2, -2]
    }
  }
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-b from-primary to-secondary relative overflow-hidden"
    >

      {/* Blueprint Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      {/* Floating Blur */}
      <motion.div
        animate={{
          x: [-30, 30, -30],
          y: [-20, 20, -20]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -top-32 -left-32"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          {/* Main Industrial Card */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.4)]">

            {/* Animated Scan Line */}
            <motion.div
              animate={{
                y: ["-100%", "120%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent h-40"
            />

            {/* Rotating Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-56 h-56 rounded-full border border-accent/30 mx-auto flex items-center justify-center relative"
            >

              {/* Pulse Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
                className="absolute w-full h-full border-4 border-accent/20 rounded-full"
              />

              {/* Inner Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-40 h-40 rounded-full border border-white/20 flex items-center justify-center"
              >

                {/* Ship Wheel */}
                <motion.div
                  animate={{
                    y: [-6, 6, -6],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ShipWheel
                    size={90}
                    className="text-accent drop-shadow-[0_0_25px_rgba(255,213,79,0.5)]"
                  />
                </motion.div>

              </motion.div>

            </motion.div>

            {/* Bottom Floating Wave */}
            <motion.div
              animate={{
                x: [-20, 20, -20]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex justify-center mt-8"
            >
              <Waves
                size={36}
                className="text-accent/60"
              />
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-5 mt-10">

              {featureCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 40
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.8
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.03
                    }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md relative overflow-hidden"
                  >

                    {/* Metallic Shine */}
                    <motion.div
                      animate={{
                        x: ["-100%", "200%"]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    />

                    {/* Floating Icon */}
                    <motion.div
                      animate={card.animation}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Icon
                        size={38}
                        className="text-accent mb-4"
                      />
                    </motion.div>

                    <h3 className="font-bold text-lg text-white">
                      {card.title}
                    </h3>

                  </motion.div>
                );
              })}

            </div>

          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold mb-6"
          >
            ABOUT OUR COMPANY
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-black leading-tight mb-8"
          >
            Trusted Marine
            <span className="text-accent block">
              Engineering Experts
            </span>
          </motion.h2>

          {/* Paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 text-lg leading-9"
          >
            SHREE VINAYAKA PROPELLERS is a Mangalore-based marine
            engineering and propeller manufacturing company dedicated
            to precision workmanship, durable engineering solutions,
            and dependable industrial services.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white/80 text-lg leading-9 mt-6"
          >
            We specialize in marine propeller manufacturing,
            repair & maintenance, shaft bend checking,
            rudder & stern gear works, and marine engineering works
            with a strong commitment to quality and customer trust.
          </motion.p>

          {/* Stats */}
         <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 sm:mt-12">

  {[
    {
      value: "100%",
      label: "Quality Focus"
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
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: index * 0.2
      }}
      whileHover={{
        scale: 1.03,
        y: -6
      }}
      className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-6 text-center backdrop-blur-md relative overflow-hidden"
    >

      {/* Shine Effect */}
      <motion.div
        animate={{
          x: ["-100%", "200%"]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: index
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <motion.h3
        animate={{
          scale: [1, 1.04, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
        className="text-lg xs:text-xl sm:text-4xl font-black text-accent leading-tight"
      >
        {item.value}
      </motion.h3>

      <p className="text-white/70 mt-1 sm:mt-2 text-[10px] xs:text-xs sm:text-base leading-tight">
        {item.label}
      </p>

    </motion.div>
  ))}

</div>

        </motion.div>

      </div>
    </section>
  );
}