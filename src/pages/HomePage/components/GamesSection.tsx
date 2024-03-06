import GamesPoster from "../../../components/GamesPoster";
import { Styles } from "../../../styles/styles";
import { Link } from "react-router-dom";
import Arrow from "../../../assets/icons/arrow.png";

import Fortnite from "../../../assets/posters/fortnite.jpg";
import OperationForces from "../../../assets/posters/operationforces.jpg";
import DoomEternal from "../../../assets/posters/doometernal.jpg";
import GtaV from "../../../assets/posters/gtav.jpg";
import WatchDogs from "../../../assets/posters/watchdogs.jpg";

import Left4Dead from "../../../assets/posters/left4dead.jpg";
import COD from "../../../assets/posters/cod.jpg";
import Cyberpunk from "../../../assets/posters/cyberpunk.jpg";
import Tekken from "../../../assets/posters/tekken.jpg";
import Valorant from "../../../assets/posters/valorant.jpg";

type GameType = {
  id: number;
  src: string;
};

const GamesSection = () => {
  const gameData: GameType[] = [
    { id: 1, src: Fortnite },
    { id: 2, src: OperationForces },
    { id: 3, src: DoomEternal },
    { id: 4, src: GtaV },
    { id: 5, src: WatchDogs },
    { id: 6, src: Left4Dead },
    { id: 7, src: COD },
    { id: 8, src: Cyberpunk },
    { id: 9, src: Tekken },
    { id: 10, src: Valorant },
  ];

  let chunkSize = 5;

  const rows = [];

  for (let i = 0; i < gameData.length; i += chunkSize) {
    const row = gameData.slice(i, i + chunkSize);
    rows.push(row);
  }

  return (
    <>
      <section className={`${Styles.gamesSection}`}>
        <h1 className={`${Styles.title}`}>
          Discover New
          <span className={`${Styles.gradientText}`}> Games</span>
        </h1>
        <div className="mt-[2rem] md:mt-[4rem]">
          {rows.map((row, index) => (
            <div
              key={index}
              className={`${Styles.gamesRow} ${index !== 0 ? "mt-5" : ""}`}
            >
              {row.map((item) => (
                <GamesPoster
                  key={item.id}
                  margin={[2, 4, 7, 9].includes(item.id) ? "lg:-mt-5" : "mt-0"}
                  src={item.src}
                />
              ))}
            </div>
          ))}

          {/** Small Screen DiscoverGame */}
          <div className={`${Styles.smallScreenGames}`}>
            {gameData.map((item) => (
              <GamesPoster key={item.id} src={item.src} />
            ))}
          </div>

          <div className={`${Styles.viewContainer}`}>
            <Link to={"/games"} className={`${Styles.view}`}>
              <span className="gradient text-[15px]">View Games</span>
              <img
                src={Arrow}
                alt="arrow"
                loading="lazy"
                className="w-[24px]"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default GamesSection;
