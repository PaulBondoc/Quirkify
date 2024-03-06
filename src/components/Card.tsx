import { Link } from "react-router-dom";
import { Styles } from "../styles/styles";

type GameType = {
  id: number;
  name: string;
  added: number;
};

type Props = {
  name: string;
  gamesCount: number;
  src: string;
  games: GameType[];
  text: string;
};

const Card = ({ name, gamesCount, src, games, text }: Props) => {
  return (
    <>
      <div className={`${Styles.card}`}>
        <img
          src={src}
          alt={name}
          className="h-[300px] object-cover opacity-[.4]"
          loading="lazy"
        />
        <div className="absolute bottom-0 z-[1] w-full  p-5">
          <h1 className="nosifer text-[22px] text-center tracking-wide">
            {name}
          </h1>
          <div className="mt-5 flex items-center justify-between">
            <p className="font-medium ">{text}</p>
            <span className="font-medium ">{gamesCount}</span>
          </div>
          <div className="my-2 w-full h-[2px] bg-white"></div>
          <div className="flex flex-col gap-1 b">
            {games.slice(0, 4).map((game) => (
              <div key={game.id} className=" flex justify-between text-[13px]">
                <Link to={`/games/${game.id}`}>
                  <p className="underline hover:gradient">{game.name}</p>
                </Link>
                <span> {game.added}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
