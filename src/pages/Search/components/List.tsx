import GameCard from "../../../components/GameCard";

type GamesType = {
  id: number;
  name: string;
  background_image: string;
  rating: number;
};
type Props = {
  games: GamesType[];
};

const List = ({ games }: Props) => {
  return (
    <>
      <section className="my-5">
        <div className="grid grid-cols-12 gap-5">
          {games.map((game, index) => (
            <GameCard
              key={index}
              id={game.id}
              name={game.name}
              src={game.background_image}
              rating={game.rating}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default List;
