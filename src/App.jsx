import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import FloatingButtons from "./components/FloatingButtons";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="bg-primary text-white">
      <Navbar />
      <Hero />
      <TrustSection />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}