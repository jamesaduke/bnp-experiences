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
      title ={item.title}
      description={item.description}
      price={item.price}
      coverImg={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      openSpots={item.openSpots}
    />
  })
  console.log(dataMapped);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {dataMapped}
    </div>
  );
}

export default App;
