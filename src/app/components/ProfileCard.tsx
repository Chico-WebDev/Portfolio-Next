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



export default function ProfileCard() {

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

    return (
    <div className="bg-white shadow-lg rounded-lg p-8 text-gray-800 text-center">
      <h2 className="text-2xl font-semibold mb-12">À propos de moi</h2>
      <p>Développeur web passionné par la création d&apos;interfaces intuitives et performantes. J&apos;adore travailler avec des technologies modernes  
            comme React, Next.js et Tailwind CSS pour monter en compétences et délivrer des expériences utilisateur au top.
          </p>
      <div className="flex flex-wrap justify-center py-8 flex-wrap gap-16">
      {icons.map(({ Icon, label }) => (
        <div key={label} className="flex flex-col items-center">
          <Icon size={48} className="text-indigo-600" />
          <span className="mt-2 text-sm">{label}</span>
        </div>
      ))}
    </div>
    
    </div>
  );
}
