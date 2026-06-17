import Image from "next/image";
export default function Card({ name,emoji, year,image}) {
  return (
    <article className={styles.card}>
   {image ? (
        <Image src={image} alt={name} width={200} height={200} />
      ) : (
      <div className={styles.emoji}>{emoji}</div>
      )}
      <h3>{year}</h3>
    <div className="card">
    </div>
    </article>
   
  );
}