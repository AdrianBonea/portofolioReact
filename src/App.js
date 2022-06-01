import Header from "./components/Header";
import Contact from "./components/Contact";
import MainContent from "./components/Main";

export default function App() {
  return (
    <div className="mx-32 font-poppins">
      <Header />
      <MainContent />
      <Contact />
    </div>
  );
}
