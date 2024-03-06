import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Styles } from "../styles/styles";

type Props = {
  id?: number;
  name?: string;
  src?: string;
  rating?: number;
};

const GameCard = ({ id, name, src, rating }: Props) => {
  return (
    <>
      <div className={`${Styles.gameCardContainer}`}>
        <Link to={`/games/${id}`}>
          <div className={`${Styles.gameCardDiv}`}>
            <img
              src={src}
              alt={name}
              loading="lazy"
              className="absolute -z-[1] top-0 h-full w-full object-cover"
            />
            <div className={`${Styles.gameCardText}`}>
              <h1 className="font-semibold uppercase tracking-wider  truncate">
                {name}
              </h1>
              <p className="my-1 flex gap-2 font-medium text-[14px]">
                <FaStar className="text-[18px]" color="orange" />
                {rating}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default GameCard;
