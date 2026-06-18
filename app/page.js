import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid"
export default function Home() {
  return (
    <main>
      < Hero
         title= "🍿 Must watch Anime😌"
      tagline="Anime worth your time."
    />
     <CardGrid items={items} />
    </main>
  );
}

