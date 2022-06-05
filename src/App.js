import Header from "./components/Header";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="mx-32 font-poppins">
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
