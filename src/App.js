import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
// import Swimmer from "./images/katie-zaferes.png";
import data from "./data.js";

function App() {
  const dataMapped = data.map(item => {
    return <Card
      key={item.id}
       {...item}
    />
  })
  console.log(dataMapped);
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <section className="cards-container">
        {dataMapped}
      </section>
    </div>
  );
}

export default App;
