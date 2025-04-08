import Image from "next/image";
import Navbar from "@app/components/Navbar";
import Footer from "@app/components/Footer";
import Hero from "@app/components/Hero";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col px-6">
        <Navbar />
        <main>
            <Hero />
        </main>
        <Footer />
    </div>
  );
}
