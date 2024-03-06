import { Styles } from "../styles/styles";

type Props = {
  name: string;
  image: string;
};
const DeveloperCard = ({ name, image }: Props) => {
  return (
    <>
      <div className={`${Styles.devCard}`}>
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`${Styles.devCardNA}`}>N/A</div>
        )}
        <p className={`${Styles.devCard}`}>{name}</p>
      </div>
    </>
  );
};

export default DeveloperCard;
