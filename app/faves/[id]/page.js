import { items } from "../../data";
import  styles from "./page.module.css";
export default async function FaveDetail({ params }) {
  const { id } = await params;
  const item = items.find((i) => String(i.id) === id);

  if (!item) {
    return (
      <main>
        <p>Sorry, that one doesn't exist.</p>
      </main>
    );
  }

  return (
    <main className={styles.body}>
    <h1>{item.emoji} {item.name}</h1>
     
      <div className={styles.content}>
    <img className={styles.images} src={item.image} alt={item.name} /> 
    <div className={ styles.details}>
    <p>{item.blurb}</p>
      <p>{"⭐".repeat(item.rating)}</p>
    </div>
    </div>
    </main>

  );
}
