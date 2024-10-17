import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Specials />
        <Testimonials />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
