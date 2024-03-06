import Loader from "../../../components/Loader";
import { Styles, gameDetailsStyle } from "../../../styles/styles";

type SimilarGamesType = {
  id: number;
  name: string;
  background_image: string;
  released: string;
  rating: number | null;
};

type Props = {
  similarGames: SimilarGamesType[] | undefined;
  isLoading: boolean;
};
const SimilarGames = ({ similarGames, isLoading }: Props) => {
  return (
    <>
      <section>
        <h1 className={`text-start nosifer text-[20px] xsm:text-[25px]`}>
          Similar
          <span className={`${Styles.gradientText}`}> Games</span>
        </h1>

        <div className="md:mt-[1rem] flex gap-5 overflow-auto py-5 ">
          {isLoading ? (
            <Loader />
          ) : similarGames && similarGames.length > 0 ? (
            similarGames?.map((game, index) => (
              <div
                key={index}
                className={`${gameDetailsStyle.similarGamesDiv}`}
              >
                {game.background_image && (
                  <img
                    src={game.background_image}
                    alt={game.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                )}
                <p className={`${gameDetailsStyle.gameName}`}>{game.name}</p>
              </div>
            ))
          ) : (
            <p className="text-[20px] text-[gray] font-semibold">
              No Similar Games
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default SimilarGames;
