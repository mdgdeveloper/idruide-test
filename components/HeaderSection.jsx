import styles from "../styles/components/HeaderSection.module.css";

const HeaderSection = ({ children, movie, search }) => {
  if (!search) {
    const backImage = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    return (
      <div className={styles.wrapper}>
        <div className={styles.mainBg}>
          <div
            className={styles.bgImage}
            style={{ background: `url(${backImage})` }}
          ></div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainBg}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default HeaderSection;
