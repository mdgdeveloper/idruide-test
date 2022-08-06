import styles from "../styles/components/Casting.module.css";

const CastingItem = ({ character }) => {
  const cover = `https://image.tmdb.org/t/p/original/${character.profile_path}`;
  return (
    <div className={styles.castItemWrapper}>
      <div className={styles.itemContainer}>
        <div
          className={styles.itemPicture}
          style={{ backgroundImage: `url('${cover}')` }}
        ></div>
        <div className={styles.itemName}>{character.name}</div>
        <div className={styles.itemCharacter}>{character.character}</div>
      </div>
    </div>
  );
};

export default CastingItem;
