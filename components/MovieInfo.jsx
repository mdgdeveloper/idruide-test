import styles from "../styles/components/MovieInfo.module.css";
import Rating from "./Rating";
import { KIND, Button } from "baseui/button";
// There is no Star as icon in Baseweb Icon component. Using Plus instead.
import Plus from "baseui/icon/plus";

const MovieInfo = ({ movie, credits }) => {
  const movieDate = movie.release_date.split("-");
  const cover = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  const genreList = movie.genres.map((genre) => genre.name).join(", ");
  const hours = Math.floor(parseFloat(movie.runtime) / 60);
  const minutes = parseFloat(movie.runtime) - 60 * hours;

  const crew = credits.crew.sort((a, b) => b.popularity - a.popularity);

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.infoText}>
          <h1 className={styles.movieTitle}>
            {movie.title}{" "}
            <span className={styles.movieDate}>({movieDate[0]})</span>
          </h1>
          <div className={styles.genres}>{genreList}</div>
          <div className={styles.addInfo}>
            <div className={styles.duration}>
              {hours}h {minutes}m
            </div>
            <Rating percentage={movie.vote_average * 10} />
          </div>
          <div className={styles.buttons}>
            <Button
              kind={KIND.secondary}
              overrides={{
                BaseButton: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.white,
                    color: $theme.colors.black,
                    height: "1.2rem",
                    outline: `${$theme.colors.white} solid 2px`,
                    fontWeight: "300",
                    fontFamily: "Archivo",
                    borderRadius: "2px",
                    fontSize: "16px",
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
                    height: "1.2rem",
                    outline: `${$theme.colors.white} solid 2px`,
                    fontWeight: "300",
                    fontFamily: "Archivo",
                    borderRadius: "2px",
                    fontSize: "16px",
                  }),
                },
              }}
            >
              <Plus />
            </Button>
          </div>
          <div className={styles.synopsis}>
            <h2 className={styles.synopsisTitle}>Synopsis</h2>
            <p className={styles.synopsisText}>{movie.overview}</p>
          </div>
          <div className={styles.credits}>
            <div className={styles.creditsRow}>
              <div className={styles.creditItem}>
                <h3 className={styles.creditJob}>{crew[0].job}</h3>
                <div className={styles.creditName}>{crew[0].name}</div>
              </div>
              <div className={styles.creditItem}>
                <h3 className={styles.creditJob}>{crew[1].job}</h3>
                <div className={styles.creditName}>{crew[1].name}</div>
              </div>
            </div>
            <div className={styles.creditsRow}>
              <div className={styles.creditItem}>
                <h3 className={styles.creditJob}>{crew[2].job}</h3>
                <div className={styles.creditName}>{crew[2].name}</div>
              </div>
              <div className={styles.creditItem}>
                <h3 className={styles.creditJob}>{crew[3].job}</h3>
                <div className={styles.creditName}>{crew[3].name}</div>
              </div>
            </div>
            <div className={styles.creditsRow}></div>
          </div>
        </div>
        <div className={styles.cover}>
          <div
            className={styles.imgCover}
            style={{ backgroundImage: `url('${cover}')` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
