import "./App.css";
import GameCard from "./components/GameCard/GameCard";

const App = () => {
  return (
    <div className="App">
      <GameCard image="vite.svg" title="Vite" description="Vite is a great." />
      <GameCard />
    </div>
  );
};

export default App;
