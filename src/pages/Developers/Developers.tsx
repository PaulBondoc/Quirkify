import { useEffect, useState } from "react";
import { fetchDevelopers } from "../../services/serviceApi";
import { Styles } from "../../styles/styles";
import List from "./components/List";
import Navigation from "./components/Navigation";
import { type DeveloperType } from "../../types/types";
import Loader from "../../components/Loader";

const Developers = () => {
  const [developers, setDevelopers] = useState<DeveloperType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [currentPage] = useState(1);

  const getDevelopers = async () => {
    try {
      setIsLoading(true);
      const fetchedData = await fetchDevelopers(currentPage);

      setDevelopers(fetchedData);
    } catch (error) {
      console.error("Error fetching developers from developers.tsx", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setIsLoadMore(true);
      const fetchedData = await fetchDevelopers(currentPage + 1);
      setDevelopers((prevList) => [...prevList, ...fetchedData]);
    } catch (error) {
      console.error("error fetching data from loadmore Button.", error);
    } finally {
      setIsLoadMore(false);
    }
  };

  useEffect(() => {
    getDevelopers();
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
              <List developers={developers} />

              <div className="mt-5 sm:mt-10 text-center">
                {isLoadMore ? (
                  <div className="mt-5">
                    <Loader />
                  </div>
                ) : (
                  <button
                    onClick={handleLoadMore}
                    className="bg-gradient-to-r from-gradient-start to bg-gradient-stop py-[5px] w-[250px] text-[15px] font-semibold tracking-wide rounded-[3px] border-l-[1px] border-t-[1px] border-[rgba(255,255,255,.5)]"
                  >
                    LOAD MORE
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Developers;
