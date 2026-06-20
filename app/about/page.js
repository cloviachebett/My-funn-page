

const favoriteCast = [
 
  { 
    name: "Gojo Satoru", 
    animeName: "Jujutsu Kaisen", 
    image: "Gojo.jpeg" 
  },
  { 
    name: "Asta", 
    animeName: "Black clover", 
    image: "Asta.jpeg"
  },
   { 
    name: "Tanjiro Kamado", 
    animeName: "Demon Slayer", 
    image: "Tanjiro.jpeg"
  },
   { 
    name: "Akaza", 
    animeName: "Demon Slayer", 
    image: "akaza_.jpeg"
  },
    { 
    name: "Jinwoo Sung", 
    animeName: "Solo Levelling", 
    image: "jinwoo.jpeg"
  },
   { 
    name: "Levi Ackerman", 
    animeName: "Attack on Titan", 
    image: "Levi.jpeg"
  }
];

import  styles from "./page.module.css";
export default function About() {
  
       return (
    <main className={styles.aboutContainer}>
      

    
      <section className={styles.castSection}>
        <h2 className={styles.sectionTitle}>The Favorite Casts ⚔️</h2>
        
        <div className={styles.castGrid}>
          {favoriteCast.map((character, index) => (
            <div key={index} className={styles.castCard}>
              <img src={character.image} alt={character.name} className={styles.characterImg} />
              <div className={styles.cardInfo}>
                <h3>{character.name}</h3>
                <p className={styles.animeName}>{character.animeName}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );

  
}

