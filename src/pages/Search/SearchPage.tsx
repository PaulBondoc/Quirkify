import { useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import { fetchSearchedGame } from "../../services/serviceApi";
import { useEffect, useState } from "react";
import List from "./components/List";
import { Styles } from "../../styles/styles";
import Loader from "../../components/Loader";

const SearchPage = () => {
  const [searchedGames, setSearchedGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q");

  const getSearchedGame = async () => {
    try {
      setIsLoading(true);
      const fetchedData = await fetchSearchedGame(query);

      setSearchedGames(fetchedData);
    } catch (error) {
      console.error("Error fetching searched game from searchpage.tsx", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSearchedGame();
  }, [query]);

  return (
    <>
      <main className="text-white min-h-screen">
        <Navigation query={query} />

        <div className={`${Styles.mainDiv}`}>
          {isLoading ? (
            <div className="mt-5">
              <Loader />
            </div>
          ) : (
            <List games={searchedGames} />
          )}
        </div>
      </main>
    </>
  );
};

export default SearchPage;
