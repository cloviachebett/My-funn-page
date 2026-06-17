// import Link from "next/link";
import Card from "./Card";
import styles from "./CardGrid.module.css";
export default function CardGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
      
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          year={item.year}
          genre={item.genre}
          blurb={item.blurb}
          image={item.image}
          rating={item.rating}
          emoji={item.emoji}
        />
    
      ))}
    </div>
  );
}