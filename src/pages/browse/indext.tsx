import { useUserData } from "../../state/UserDataContext";
import Hero from "./Hero";
export default function Browse() {
  const { userData } = useUserData();

  return (
    <main>
      <Hero />
    </main>
  );
}
