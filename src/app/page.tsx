import Hero from './components/Hero';
import ProfileCard from './components/ProfileCard';

export default function Home() {
  return (
    <>
      <Hero />
      <section id="about" className="container mx-auto py-16">
        <ProfileCard />
      </section>
    </>
  );
}
