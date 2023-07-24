import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./assets/data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="container">
      <Navbar />
      <div className="card-list">{cards}</div>
    </div>
  );
}

export default App;
