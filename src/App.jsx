import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <About/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
