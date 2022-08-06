import Link from "next/link";
import styles from "../styles/components/VideoList.module.css";

const VideoList = ({ videos }) => {
  const videoList = videos.results.slice(0, 3);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Bandes annonces</h2>
      <div className={styles.videoList}>
        {videoList.map((videoItem, index) => (
          <div className={styles.video} key={index}>
            <iframe
              width="344"
              height="193"
              src={`https://www.youtube.com/embed/${videoItem.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
