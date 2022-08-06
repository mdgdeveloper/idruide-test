import styles from "../styles/components/HeaderPage.module.css";
import { Search } from "baseui/icon";
import Link from "next/link";

const HeaderPage = ({ setSearch, search }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Link href="/">
          <a>
            <h1 className={styles.headerTitle} onClick={() => setSearch("")}>
              MOVIENIGHT
            </h1>
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
              value={search !== "" ? search : undefined}
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
