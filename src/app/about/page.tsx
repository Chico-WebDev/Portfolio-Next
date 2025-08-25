import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiTypescript
} from "react-icons/si";


export default function About() {

     const icons = [
      { Icon: SiHtml5, label: "HTML5" },
      { Icon: SiCss3, label: "CSS3" },
      { Icon: SiJavascript, label: "JavaScript" },
      { Icon: SiTailwindcss, label: "Tailwind CSS" },
      { Icon: SiBootstrap, label: "Bootstrap" },
      { Icon: SiReact, label: "React" },
      { Icon: SiNextdotjs, label: "Next.js" },
      { Icon: SiTypescript, label: "TypeScript" },
    ];

return <div className="container min-h-screen mx-auto flex flex-col justify-center flex-wrap px-4"><h1 className="text-3xl font-bold text-gray-900 mb-4">À propos</h1>
  
  <p className="text-gray-800 leading-relaxed">
            Salut ! Je suis <strong>Chico JD</strong>, développeur Web passionné par la création  
            d&apos;interfaces intuitives et performantes. J&apos;adore travailler avec des technologies modernes  
            comme React, Next.js et Tailwind CSS pour monter en compétences et délivrer des expériences utilisateur au top.
          </p>

           <div className="flex justify-center py-8 flex-wrap gap-16">
      {icons.map(({ Icon, label }) => (
        <div key={label} className="flex flex-col items-center">
          <Icon size={48} className="text-indigo-600" />
          <span className="mt-2 text-sm text-gray-500">{label}</span>
        </div>
      ))}
    </div>

  </div>;
}
