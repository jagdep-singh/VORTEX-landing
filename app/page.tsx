import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tools from "@/components/Tools";
import Install from "@/components/Install";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Tools />
      <Install />
      <Footer />
    </main>
  );
}
