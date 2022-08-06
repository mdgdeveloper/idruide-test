import { useEffect, useState } from "react";
import styles from "../styles/components/Search.module.css";
import { Spinner } from "baseui/spinner";
import axios from "axios";
import MovieTopItem from "./MovieTopItem";

const Search = ({ search, setSearch }) => {
  const [searchValues, setSearchValues] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getSearch = async (searchValue) => {
      if (search === "") setLoading(false);
      else {
        try {
          const searchResult = await axios.get(
            `https://api.themoviedb.org/3/search/multi/?api_key=c084d6213d4c94cd385a79972c451539&query=${search}`
          );
          setLoading(false);
          if (searchResult) {
            setSearchValues(searchResult.data.results);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    getSearch(search);
  }, [search]);

  console.log("search results:", searchValues);
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          {loading ? (
            <div className={styles.spinner}>
              <Spinner />
            </div>
          ) : (
            <>
              <div className={styles.title}>{search}</div>
              <div className={styles.number}>
                {searchValues && searchValues.length} résultats
              </div>
              <div className={styles.resultList}>
                {searchValues &&
                  searchValues.map((movie, index) => (
                    <MovieTopItem
                      setSearch={setSearch}
                      item={movie}
                      key={index}
                      index={index}
                    />
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
