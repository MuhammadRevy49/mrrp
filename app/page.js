import Home from "./pages/home";
import Skill from "./pages/skill";
import Project from "./pages/project";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./pages/footer";

export default function Master() {
  return (
    <div className="overflow-x-hidden">
      <Home />
      <Skill />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}