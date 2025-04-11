import Navbar from '@app/components/Navbar';
import Footer from '@app/components/Footer';
import Hero from '../components/HeroHome';

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
