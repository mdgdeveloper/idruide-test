import styles from "../styles/components/Casting.module.css";
import CastingItem from "./CastingItem";
import ArrowRight from "baseui/icon/arrow-right";

const Casting = ({ credits }) => {
  const cast = credits.cast
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 10);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Casting</h2>
      <div className={styles.castingList}>
        {cast.map((character, index) => (
          <CastingItem character={character} key={index} />
        ))}
        <div className={styles.castItemNextWrapper}>
          <div className={styles.itemNextContainer}>
            <div className={styles.nextInfo}>Voir tout</div>
            <ArrowRight size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casting;
