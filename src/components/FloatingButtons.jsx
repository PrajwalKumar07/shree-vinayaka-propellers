import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/916363818018"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-2xl"
      >
        <MessageCircle />
      </a>

      <a
        href="tel:6363818018"
        className="fixed bottom-24 right-6 z-50 bg-accent text-black p-4 rounded-full shadow-2xl"
      >
        <Phone />
      </a>
    </>
  );
}