import { useUserData } from "../../state/UserDataContext";
import Hero from "./Hero";
import requests from "../../scripts/requests";
import Row from "components/row/Row";
export default function Browse() {
  const { userData } = useUserData();

  return (
    <main id={"browse"} className="browse">
      <Hero />
      <Row
        rowTitle="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row rowTitle="Trending Now" fetchURL={requests.fetchTrending} />
      <Row rowTitle="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row rowTitle="Series" fetchURL={requests.fetchSeries} />
    </main>
  );
}
