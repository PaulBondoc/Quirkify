import CardComponent from "../../../components/CardComponent";
import { Styles } from "../../../styles/styles";

type CardDataType = {
  id: number;
  name: string;
  src: string;
  description: string;
};

const PoweredSection = () => {
  const CardData: CardDataType[] = [
    {
      id: 3498,
      name: "GTA V",
      src: "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      description:
        "Experience GTA Online, a dynamic and ever-evolving online universe for up to 30 players, where you can rise from street-level hustler to become a kingpin of your own criminal empire.",
    },
    {
      id: 3070,
      name: "Fallout 4",
      src: "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      description:
        "Bethesda Game Studios, the award-winning creators of Fallout 3 and The Elder Scrolls V: Skyrim, welcome you to the world of Fallout 4 – their most ambitious game ever, and the next generation of open-world gaming.",
    },
    {
      id: 58175,
      name: "God of War",
      src: "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      description:
        "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
    },
  ];

  return (
    <>
      <section className="my-[3rem] md:my-[5rem]">
        <h1 className={`${Styles.title}`}>
          Powered By
          <span className={`${Styles.gradientText}`}> RAWG API</span>
        </h1>

        <div className={`${Styles.poweredCard}`}>
          {CardData.map((item, index) => (
            <CardComponent
              key={index}
              id={item.id}
              name={item.name}
              src={item.src}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default PoweredSection;
