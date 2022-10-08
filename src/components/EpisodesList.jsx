import { useEffect, useState } from "react";
import { getEpisodes } from "../service/data-service";
import Episode from "./Episode";

const initialState = [];

function EpisodesList({ season }) {
  const [episodes, setEpisodes] = useState(initialState);

  useEffect(() => {
    getEpisodes().then((episodes) => {
      setEpisodes(episodes);
    });
  }, []);

  return (
    <div className="d-flex flex-wrap p-5">
      {episodes === initialState
        ? "Loading..."
        : episodes
            .filter((e) => (season === null ? true : e.season === season))
            .map((episode, i) => (
              <Episode
                key={i}
                img={episode.image.medium}
                title={episode.name}
                description={episode.summary}
                season={episode.season}
                number={episode.number}
              />
            ))}
    </div>
  );
}

export default EpisodesList;
