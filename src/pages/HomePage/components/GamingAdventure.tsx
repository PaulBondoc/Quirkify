import { Styles } from "../../../styles/styles";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import Gaming1 from "../../../assets/gaming1.jpg";
import Gaming2 from "../../../assets/gaming2.jpg";
import ButtonComponent from "../../../components/ButtonComponent";

type ImageData = {
  src: string;
  style?: string;
};

const GamingAdventure = () => {
  const images: ImageData[] = [
    { src: Gaming1 },
    { src: Gaming2 },
    { src: Gaming2, style: "sm:-ms-[1rem]" },
    { src: Gaming1, style: "sm:-ms-[1rem]" },
  ];
  return (
    <>
      <section className="my-[3rem] md:my-[5rem]">
        <h1 className={`${Styles.title}`}>
          Start Your
          <span className={`${Styles.gradientText}`}> Gaming Adventure</span>
        </h1>

        <div className={`${Styles.adventureContainer}`}>
          <div className="w-full xs:w-[340px]">
            <div className="grid grid-cols-12 gap-4">
              {images.map((item, index) => (
                <div key={index} className="col-span-6">
                  <img
                    src={item.src}
                    alt=""
                    className={`${Styles.adventureImage} ${item.style}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[80%] lg:w-[500px]">
            <h1 className={`${Styles.adventureTitle}`}>
              Explore Our Gaming Collection
            </h1>
            <p className={`${Styles.adventureText}`}>
              Plunge into the thrilling universe of gaming, where excitement
              knows no bounds. Discover a carefully curated collection that
              perfectly aligns with your gaming desires. Immerse yourself in the
              adrenaline-pumping action, strategic challenges, and captivating
              narratives that await. From heart-pounding battles to
              brain-teasing puzzles, each gaming experience is meticulously
              chosen to ignite your passion for play. Get ready to elevate your
              gaming journey to new heights. Start Exploring Now!
            </p>
            <div>
              <Link to={"/games"}>
                <ButtonComponent value="explore" Icon={FaRocket} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GamingAdventure;
