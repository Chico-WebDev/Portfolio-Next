import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'FlexMovie',
    description: 'Une plateforme de streaming moderne qui affiche les films populaires, avec affichage dynamique, filtres et responsive design.',
    img: '/Flexmovies.PNG',
    link: 'https://projet-movies.vercel.app'
  },
  {
    id: 2,
    title: 'CHICO PIC',
    description: 'Application de galerie photo alimentée par une API, avec recherche d’images en temps réel et affichage responsive en grille.',
    img: '/chico-pic.PNG',
    link: 'https://chico-pic.vercel.app'
  },
  {
    id: 3,
    title: 'NexlyFood',
    description: 'Site vitrine de restauration moderne, design soigné et animations, parfait pour présenter un menu et attirer des clients.',
    img: '/nexlyfood.PNG',
    link: 'https://nexlyfood.vercel.app'
  },
  {
    id: 4,
    title: 'M..AJShop',
    description: 'Application e-commerce complète avec affichage des produits, panier, responsive design et interface intuitive.',
    img: '/e-commerce.PNG',
    link: 'https://e-commerce-mocha-eta-45.vercel.app'
  },
  {
    id: 5,
    title: 'Universal-Color',
    description: 'Générateur de palettes de couleurs avec code hex, aperçu en temps réel et outils de copie rapide, idéal pour les designers.',
    img: '/Color.PNG',
    link: 'https://Universal-color.vercel.app'
  },
  {
    id: 6,
    title: 'CHICO Bot',
    description: "Interface d'interaction avec un bot intelligent développé avec l'API OpenAI, permettant des réponses dynamiques en temps réel.",
    img: '/Chico-bot.PNG',
    link: 'https://chat-bot-chico-jd.vercel.app'
  }
];


export default function Projects() {
  return (
    <div id="projects" className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p, i) => <ProjectCard key={i} {...p}/>)}
    </div>
  );
}
