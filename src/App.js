import About from "./components/About";
import Developer from "./components/Developer";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Developer/>
      <Footer/>
    </div>
  );
}

export default App;
