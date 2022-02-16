import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Swimmer from "./images/katie-zaferes.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img={Swimmer}
        rating={4}
        reviewCount={10}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
