import data from "../data/episodes.json";

export function getEpisodes() {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve([...data.episodes]);
    }, 2000);
  });
}
