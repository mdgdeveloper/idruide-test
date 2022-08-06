import styles from "../styles/components/MovieTopItem.module.css";
import Link from "next/link";
import Rating from "./Rating";

const MovieTopItem = ({ item, index, setSearch }) => {
  const cover = `https://image.tmdb.org/t/p/original/${item.poster_path}`;

  const handleSetSearch = () => {
    if (setSearch) setSearch("");
  };

  return (
    <Link href={`/movie/${item.id}`}>
      <a>
        <div className={styles.wrapper} onClick={handleSetSearch}>
          <div
            className={styles.cover}
            style={{ backgroundImage: `url('${cover}')` }}
          ></div>
          <div className={styles.movieTitle}>{item.title}</div>
          <div className={styles.rating}>
            <Rating percentage={item.vote_average * 10} />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default MovieTopItem;
