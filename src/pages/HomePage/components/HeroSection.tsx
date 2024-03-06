import ButtonComponent from "../../../components/ButtonComponent";
import { FaRocket } from "react-icons/fa";
import { Styles } from "../../../styles/styles";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section>
        <h1 className={`${Styles.heroTitle}`}>
          discover new games in the
          <span className={`${Styles.gradientText}`}> dynamic metaverse</span>
        </h1>
        <p className={`${Styles.heroSubtitle}`}>
          Immerse Yourself In Gaming Adventures While Enjoying Your Favorite
          Music.
        </p>
        <div className="text-center">
          <Link to={"/games"}>
            <ButtonComponent value="discover games" Icon={FaRocket} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
