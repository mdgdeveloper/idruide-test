import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderPage from "../../components/HeaderPage";
import styles from "../../styles/Movie.module.css";
import axios from "axios";
import { Spinner } from "baseui/spinner";
import MovieInfo from "../../components/MovieInfo";
import MovieSection from "../../components/MovieSection";
import VideoList from "../../components/VideoList";
import Casting from "../../components/Casting";
import Search from "../../components/Search";

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const [credits, setCredits] = useState();
  const [videos, setVideos] = useState();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c084d6213d4c94cd385a79972c451539`
        );
        const creditsReq = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c084d6213d4c94cd385a79972c451539`
        );

        const videosReq = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c084d6213d4c94cd385a79972c451539`
        );

        if (result && creditsReq && videosReq) {
          setLoading(false);
          setMovie(result.data);
          setCredits(creditsReq.data);
          setVideos(videosReq.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);
  return (
    <div>
      {loading ? (
        <div className={styles.spinner}>
          <HeaderPage setSearch={setSearch} search={search} />
          <Spinner />
        </div>
      ) : !search ? (
        <div>
          <MovieSection movie={movie}>
            <HeaderPage
              setSearch={setSearch}
              search={search}
              key="searchComponent"
            />
            <MovieInfo movie={movie} credits={credits} />
            <VideoList videos={videos} />
            <Casting credits={credits} />
          </MovieSection>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "1200px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HeaderPage setSearch={setSearch} search={search} />
            <Search search={search} setSearch={setSearch} />
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
