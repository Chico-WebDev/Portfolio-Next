import Image from "next/image";

type Props = { title: string; description: string; img: string; link: string; };



export default function ProjectCard({ title, description, img, link }: Props) {
  return (
    <a href={link} target="_blank" rel="noopener" className="block bg-white shadow hover:shadow-xl rounded overflow-hidden transition">
      <Image src={img} alt={title} width={400} height={250} className="w-full object-cover"/>
      <div className="p-4">
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-md mt-2">{description}</p>
      </div>
    </a>
  );
}
