import styles from "../styles/components/TopList.module.css";
import MovieTopList from "./MovieTopList";
import { ArrowRight } from "baseui/icon";
import { ArrowLeft } from "baseui/icon";

const TopList = ({ data, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigator}>
        <div className={styles.main}>
          <h1 className={styles.listTitle}>{title}</h1>
          <MovieTopList data={data} />
        </div>
      </div>
    </div>
  );
};

export default TopList;
