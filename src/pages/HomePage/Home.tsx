import BlurCircle from "../../components/BlurCircle";
import GamesSlider from "./components/GamesSlider";
import GamesSection from "./components/GamesSection";
import HeroSection from "./components/HeroSection";
import InfiniteAnimation from "./components/InfiniteAnimation";
import Details from "./components/Details";
import PoweredSection from "./components/PoweredSection";
import GamingAdventure from "./components/GamingAdventure";
import { Styles } from "../../styles/styles";

const Home = () => {
  return (
    <>
      <main className="my-[2rem] md:my-[3.5rem] text-white">
        <div className={`${Styles.mainDiv}`}>
          <BlurCircle />

          <HeroSection />

          <InfiniteAnimation />

          <GamesSection />
        </div>

        <Details />

        <div className={`${Styles.mainDiv}`}>
          <PoweredSection />
        </div>

        <GamesSlider />

        <div className={`${Styles.mainDiv}`}>
          <GamingAdventure />
        </div>
      </main>
    </>
  );
};

export default Home;
