import Intro from "@/components/Intro";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Process from "@/components/Process";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main className="bg-cream text-ink overflow-x-hidden">
      <Intro />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Process />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </main>
  );
}
