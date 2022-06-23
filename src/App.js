import { Header, Contact, AboutMe, Projects } from "./components";
import { AppContainer } from "./containers";

export default function App() {
  return (
    <AppContainer>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </AppContainer>
  );
}
