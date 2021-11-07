import { useUserData } from "../../state/UserDataContext";
import Hero from "./Hero";
export default function Browse() {
  const { userData } = useUserData();

  return (
    <main id={"browse"} className="browse">
      <Hero />

      <h1>My list</h1>
    </main>
  );
}
