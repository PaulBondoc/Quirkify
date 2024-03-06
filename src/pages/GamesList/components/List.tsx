import GameCard from "../../../components/GameCard";
import { type GameDataType } from "../../../types/types";

type Props = {
  gameList: GameDataType[];
};

const List = ({ gameList }: Props) => {
  return (
    <>
      <section className="mt-5">
        <div className="grid grid-cols-12 gap-5">
          {gameList.map((item, index) => (
            <GameCard
              key={index}
              id={item.id}
              name={item.name}
              src={item.background_image}
              rating={item.rating}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default List;
