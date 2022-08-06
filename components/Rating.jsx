import styles from "../styles/components/Rating.module.css";

const Rating = ({ percentage }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rating}>
        <div className={styles.green} style={{ width: `${percentage}%` }}></div>
        <div
          className={styles.black}
          style={{ width: `${100 - percentage}%` }}
        ></div>
      </div>
      <div className={styles.value}>{Math.floor(percentage)}%</div>
    </div>
  );
};

export default Rating;
