import Header from "../components/Header";
import axios from "axios";

import { Spinner } from "baseui/spinner";
import { useEffect, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import TopList from "../components/TopList";
import HeaderPage from "../components/HeaderPage";
import Search from "../components/Search";
import HeaderMovie from "../components/HeaderMovie";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState();
  const [topData, setTopData] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=c084d6213d4c94cd385a79972c451539&page=1"
        );
        const top = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=c084d6213d4c94cd385a79972c451539&page=1"
        );
        if (result && top) {
          setLoading(false);
          setInitialData(result.data.results);
          setTopData(top.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <>
          <HeaderSection movie={initialData[0]} search={search}>
            <HeaderPage
              setSearch={setSearch}
              search={search}
              key="searchComponent"
            />
            {!search ? <HeaderMovie movie={initialData[0]} /> : <></>}
          </HeaderSection>
          {!search ? (
            <>
              <TopList
                data={initialData.slice(1, 10)}
                title="À l'affiche cette semaine"
              />
              <TopList data={topData} title="Les films le mieux notés" />
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Search search={search} setSearch={setSearch} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
