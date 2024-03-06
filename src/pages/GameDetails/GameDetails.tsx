import { useParams } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import {
  fetchDevelopersByGame,
  fetchGameDetails,
  fetchGameScreenShots,
  fetchSimilarGames,
} from "../../services/serviceApi";
import { useEffect, useState } from "react";
import { Styles, gameDetailsStyle } from "../../styles/styles";
import DevelopmentTeam from "./components/DevelopmentTeam";
import SimilarGames from "./components/SimilarGames";
import Loader from "../../components/Loader";

type DetailsType = {
  background_image: string;
};

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState();
  const [gameImage, setGameImage] = useState<DetailsType>();
  const [screenshots, setScreenShots] = useState();
  const [developers, setDevelopers] = useState();
  const [similarGames, setSimilarGames] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isDevelopersLoading, setIsDevelopersLoading] = useState(true);
  const [isSimilarGameLoading, setIsSimilarGameLoading] = useState(true);
  const [isScreenShotLoading, setIsScreenShotLoading] = useState(true);
  const { gameId } = useParams();

  const getGameDetails = async () => {
    try {
      setIsLoading(true);
      const fetchedData = await fetchGameDetails(gameId);

      setGameDetails(fetchedData);
      setGameImage(fetchedData);
    } catch (error) {
      console.error("Error fetching game details from gamedetails.tsx");
    } finally {
      setIsLoading(false);
    }
  };

  const getGameScreenshots = async () => {
    try {
      setIsScreenShotLoading(true);
      const fetchedData = await fetchGameScreenShots(gameId);

      setScreenShots(fetchedData);
    } catch (error) {
      console.error("Error fetching game screenshots from gamedetails.tsx");
    } finally {
      setIsScreenShotLoading(false);
    }
  };

  const getDevelopersByGame = async () => {
    try {
      setIsDevelopersLoading(true);
      const fetchedData = await fetchDevelopersByGame(gameId);

      setDevelopers(fetchedData);
    } catch (error) {
      console.error("Error fetching developers by games from gamedetails.tsx");
    } finally {
      setIsDevelopersLoading(false);
    }
  };

  const getSimilarGames = async () => {
    try {
      setIsSimilarGameLoading(true);
      const fetchedData = await fetchSimilarGames(gameId);

      setSimilarGames(fetchedData);
    } catch (error) {
      console.error("Error fetching Similar games from gamedetails.tsx");
    } finally {
      setIsSimilarGameLoading(false);
    }
  };

  useEffect(() => {
    getGameDetails();
    getGameScreenshots();
    getDevelopersByGame();
    getSimilarGames();
  }, []);

  return (
    <>
      <img
        src={gameImage?.background_image ?? ""}
        alt=""
        className={`${gameDetailsStyle.backgroundImage}`}
        loading="lazy"
      />

      <main className={`${gameDetailsStyle.main}`}>
        <div className={`${Styles.mainDiv} min-h-[80vh]`}>
          {isLoading ? (
            <Loader />
          ) : (
            <HeroSection
              gameDetails={gameDetails}
              screenshots={screenshots}
              isLoading={isScreenShotLoading}
            />
          )}
        </div>

        <div className={`${gameDetailsStyle.mainDiv}`}>
          <DevelopmentTeam
            developers={developers}
            isLoading={isDevelopersLoading}
          />

          <SimilarGames
            similarGames={similarGames}
            isLoading={isSimilarGameLoading}
          />
        </div>
      </main>
    </>
  );
};

export default GameDetails;
