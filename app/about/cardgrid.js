import Card from "./card";
import styles from "./cardgrid.module.css";
export default function Cardgrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
      
        <Card
          key={item.id}
          name={item.name}
          year={item.year}
          image={item.image}
          emoji={item.emoji}
        />
    
      ))}
    </div>
  );
}