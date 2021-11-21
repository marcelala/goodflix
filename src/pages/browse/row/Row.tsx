import { useEffect, useState } from "react";
import axios from "scripts/axios";
import Poster from "pages/browse/poster/Poster";
import Top from "pages/browse/poster/Top";
import iMedia from "interfaces/iMedia";
import Icon from "components/Icon";

interface iProps {
  rowTitle: string;
  fetchURL: string;
  isTop?: boolean;
}
const initialState: iMedia[] = [];

export default function Row({ rowTitle, fetchURL, isTop }: iProps) {
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

  const TopPosters = media.slice(0, 10).map((item, index) => (
    <div key={item.id} className="rank">
      <Icon fileName={`rank${(index + 1).toString()}`} />
      <Top media={item} baseURL={fetchURL} />
    </div>
  ));

  return (
    <section id="row">
      <h2>{rowTitle}</h2>
      {isTop ? <ul>{TopPosters}</ul> : <ul>{Posters}</ul>}
    </section>
  );
}
