import { useEffect, useState } from "react";
import axios from "scripts/axios";
import Poster from "components/poster/Poster";
import iMedia from "../../interfaces/iMedia";

interface iProps {
  rowTitle: string;
  fetchURL: string;
}
const initialState: iMedia[] = [];

export default function Row({ rowTitle, fetchURL }: iProps) {
  //@ts-ignore
  const [media, setMedia] = useState(initialState);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMedia(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  const Posters = media.map((item) => (
    <Poster media={item} baseURL={fetchURL} key={item.id} />
  ));

  return (
    <section id="row">
      <h2>{rowTitle}</h2>
      <ul>{Posters}</ul>
    </section>
  );
}
