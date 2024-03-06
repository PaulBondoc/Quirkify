import Card from "../../../components/Card";
import { type DeveloperType } from "../../../types/types";

type Props = {
  developers: DeveloperType[] | undefined;
};

const List = ({ developers }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-12 gap-5">
        {developers?.map((developer, index) => (
          <Card
            key={index}
            name={developer.name}
            gamesCount={developer.games_count}
            src={developer.image_background}
            games={developer.games}
            text={"Popular Items"}
          />
        ))}
      </div>
    </section>
  );
};

export default List;
