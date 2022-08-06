import Slider from "react-slick";

import MovieTopItem from "./MovieTopItem";
import styles from "../styles/components/MovieTopList.module.css";

const MovieTopList = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <MovieTopItem item={item} key={index} index={index} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MovieTopList;
