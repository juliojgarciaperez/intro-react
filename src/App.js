import { useState } from "react";
import "./App.css";
import EpisodesList from "./components/EpisodesList";
import Header from "./components/Header";
import SeasonsFilter from "./components/SeaonsFilter";

function App() {
  const [season, setSeason] = useState(1);

  function filterSeason(season) {
    setSeason(season);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <SeasonsFilter season={season} filterSeason={filterSeason} />
        <EpisodesList season={season} />
      </div>
    </div>
  );
}

export default App;
