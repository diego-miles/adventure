"use client"
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
    title: "Web development",
    description:
      "Building the web with modern stacks, fast and cheap.",
    link: "#",
  },
  {
    title: "Data Management",
    description:
      "Automate the data of your organization, no more beurocracy.",
    link: "#",
  },
  {
    title: "AI and tools integrations",
    description:
      "Harness the power of AI, integrate custom solution for your organization.",
    link: "#",
  },
  {
    title: "Business Consulting",
    description:
      "Dont know how to leverage from the power of new technologies? we can help you.",
    link: "#",
  },

];
