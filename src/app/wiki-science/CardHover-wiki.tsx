import { HoverEffect } from "../../components/ui/card-hover-effect";

 export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <HoverEffect items={projects} />
    </div>
  );
}
 const projects = [
  {
    title: "Electronics encyclopedia",
    description:
      "Accesible information for people to build.",
    link: "#",
  },
  {
    title: "The outsiders",
    description:
      "Mapping the hisoty of the people that has shaped our world.",
    link: "#",
  },
  {
    title: "Periodic table",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "#",
  },
  {
    title: "Inventions",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "#",
  },
  {
    title: "Glossary",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "#",
  },
  {
    title: "Crops calendar",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "#",
  },
];