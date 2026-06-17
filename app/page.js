import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid"
export default function Home() {
  return (
    <main>
      < Hero
         title= "🍿 My Favorite Movies😌"
      tagline="A few movies I could watch forever — and why they're worth your time."
    />
     <CardGrid items={items} />
    </main>
  );
}

