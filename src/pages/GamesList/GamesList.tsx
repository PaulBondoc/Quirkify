import { useEffect, useState } from "react";
import { fetchGamesList } from "../../services/serviceApi";
import { Styles } from "../../styles/styles";
import Navigation from "./components/Navigation";
import Sliders from "./components/Sliders";
import List from "./components/List";
import { type GameDataType } from "../../types/types";
import Loader from "../../components/Loader";
const GamesList = () => {
  const [gameList, setGameList] = useState<GameDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [currentPage] = useState(1);

  const getGameList = async () => {
    try {
      setIsLoading(true);
      const fetchedData = await fetchGamesList(currentPage);

      setGameList(fetchedData);
    } catch (error) {
      console.error("Error fetching game list from gamelist page.", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setIsLoadMore(true);
      const fetchData = await fetchGamesList(currentPage + 1);
      setGameList((prevList) => [...prevList, ...fetchData]);
    } catch (error) {
      console.error("error fetching data from loadmore Button.", error);
    } finally {
      setIsLoadMore(false);
    }
  };

  useEffect(() => {
    getGameList();
  }, []);

  return (
    <>
      <main className="text-white min-h-screen">
        <Navigation />

        <div className={`${Styles.mainDiv} my-5 sm:my-10`}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Sliders />

              <List gameList={gameList} />

              {isLoadMore ? (
                <div className="mt-5">
                  <Loader />
                </div>
              ) : (
                <div className="mt-5 sm:mt-10 text-center">
                  <button
                    onClick={handleLoadMore}
                    className={`${Styles.loadMoreButton}`}
                  >
                    LOAD MORE
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default GamesList;
