import { Styles } from "../styles/styles";

type Props = {
  margin?: string;
  src: string;
};

const GamesCard = ({ margin, src }: Props) => {
  return (
    <>
      <img
        src={src}
        alt="Card Image"
        loading="lazy"
        className={`${Styles.gameCard} ${margin}`}
      />
    </>
  );
};

export default GamesCard;
