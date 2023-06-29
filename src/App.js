import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Thanks from "./components/Thanks";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <SocialLinks />
      <Thanks />
    </div>
  );
}

export default App;
