import styles from "../styles/components/HeaderMovie.module.css";
import { KIND, Button } from "baseui/button";

const HeaderMovie = ({ movie }) => {
  const movieDate = movie.release_date.split("-");
  const backImage = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  return (
    <div className={styles.movieInfoWrapper}>
      <div
        className={styles.movieImage}
        style={{ backgroundImage: `url(${backImage})` }}
      ></div>
      <div className={styles.content}>
        <div className={styles.movieInfo}>
          <h1 className={styles.movieTitle}>
            {movie.title}
            <span className={styles.movieYear}> ({movieDate[0]})</span>
          </h1>
          <div className={styles.buttonSection}>
            <Button
              kind={KIND.secondary}
              overrides={{
                BaseButton: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.white,
                    color: $theme.colors.black,
                    height: "2.2rem",
                    outline: `${$theme.colors.white} solid 2px`,
                    fontWeight: "300",
                    fontFamily: "Archivo",
                    borderRadius: "5px",
                    fontSize: "20px",
                  }),
                },
              }}
            >
              Regarder
            </Button>
            <Button
              kind={KIND.secondary}
              overrides={{
                BaseButton: {
                  style: ({ $theme }) => ({
                    outline: `${$theme.colors.white} solid 2px`,
                    backgroundColor: "rgba(0,0,0,0)",
                    color: $theme.colors.white,
                    height: "2.2rem",
                    fontWeight: "300",
                    fontFamily: "Archivo",
                    borderRadius: "5px",
                    fontSize: "20px",
                  }),
                },
              }}
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMovie;
