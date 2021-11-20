import { useEffect, useState } from "react";
import { useData } from "../state/DataContext";
import { getCollection } from "../firebaseServices/firestore";

export default function useFetch(path) {
  const [content, setContent] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useData();

  async function fetchData(path) {
    try {
      const fetchedData = await getCollection(path);
      setContent(fetchedData);
      dispatch({ type: "SET_DATA", payload: content });
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(path);
  }, []);

  return { content, error, loading, setContent };
}
