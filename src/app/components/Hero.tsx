// components/Hero.tsx
import Image from "next/image";
import profile from "../images/profile.jpg"

export default function Hero() {
  return (
    <section className="flex flex-col bg-white lg:flex-row items-center justify-center gap-8 h-screen px-6 bg-black text-white">
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl text-gray-800 font-bold">
          Salut, je suis <span className="text-indigo-400">Chico JD</span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-800 max-w-md">
          Développeur Web & UI/UX. Je crée des expériences utilisateurs modernes.
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <a
            href="projects"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-md transition"
          >
            Voir mes projets
          </a>
          <a
            href="contact"
            className="px-6 py-3 text-indigo-600 border border-gray-300 hover:bg-indigo-500 hover:text-white hover:bg-indigo-500 rounded-md transition"
          >
            Contactez-moi
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src={profile}
          alt="Photo de profil"
          width={400}
          height={400}
          className="rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}
