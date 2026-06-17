import Link from "next/link";
import Image from "next/image";
import styles from "./Card.module.css";
import LikeButton from "./LikeButton";

export default function Card({ name, blurb, rating, emoji, year,genre,image,id}) {
  return (
    <article className={styles.card}>
   {image ? (
        <Image src={image} alt={name} width={200} height={200} />
      ) : (
      <div className={styles.emoji}>{emoji}</div>
      )}
      <h2><Link href={"/faves/" + id}>{name}</Link></h2>
      <h3>{year}</h3>
       <p>{genre}</p>
      <p>{blurb}</p>
    <div className="card">
        <LikeButton />
    </div>
      <p className={styles.stars}>{"⭐".repeat(rating)}</p>
    </article>
   
  );
}