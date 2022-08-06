import styles from "../styles/components/Header.module.css";
import { Search } from "baseui/icon";
import HeaderMovie from "./HeaderMovie";
import Link from "next/link";

const Header = ({ movie, setSearch }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Link href="/">
          <a>
            <h1 className={styles.headerTitle}>MOVIENIGHT</h1>
          </a>
        </Link>
        <div className={styles.search}>
          <div className={styles.inputBox}>
            <Search size="20px" color="white" />
            <input
              onChange={handleSearch}
              className={styles.inputStyle}
              placeholder="Rechercher un film, un réalisteur, un acteur"
              size={40}
            />
          </div>
        </div>
      </div>
      <HeaderMovie movie={movie} />
    </div>
  );
};

export default Header;
