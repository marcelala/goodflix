import { useUserData } from "../../state/UserDataContext";
import Hero from "./Hero";
import requests from "../../scripts/requests";
import Row from "components/row/Row";
export default function Browse() {
  const { userData } = useUserData();

  return (
    <main id={"browse"} className="browse">
      <Hero />

      <Row rowTitle="Popular on Netflix" fetchURL={requests.fetchTrending} />
      <Row rowTitle="Trending Now" fetchURL={requests.fetchTrending} />
      <Row
        rowTitle="Top 10 in Sweden Today"
        fetchURL={requests.fetchNetflixOriginals}
        isTop={true}
      />
      <Row rowTitle="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row
        rowTitle="Critically-acclaimed TV Programmes"
        fetchURL={requests.fetchSeries}
      />
      <Row rowTitle="Thriller" fetchURL={requests.fetchThrillerMovies} />
      <Row rowTitle="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row rowTitle="Comedies" fetchURL={requests.fetchComedyMovies} />
      <Row rowTitle="Animation" fetchURL={requests.fetchAnimationMovies} />
    </main>
  );
}
