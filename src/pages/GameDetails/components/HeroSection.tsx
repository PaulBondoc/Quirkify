import { FaStar } from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import { type DetailsType } from "../../../types/types";
import { Link } from "react-router-dom";
import { useState } from "react";
import Loader from "../../../components/Loader";
import { gameDetailsStyle } from "../../../styles/styles";

type Screenshots = {
  image: string;
};

type Props = {
  gameDetails: DetailsType | undefined;
  screenshots?: Screenshots[];
  isLoading: boolean;
};

const HeroSection = ({ gameDetails, screenshots, isLoading }: Props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const Max_Length = window.innerWidth < 850 ? 250 : 500;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const description = gameDetails?.description_raw || "";
  return (
    <>
      <section className="text-center">
        <h1 className={`${gameDetailsStyle.heroTitle}`}>{gameDetails?.name}</h1>

        <div className={`${gameDetailsStyle.details}`}>
          <p className="font-medium">
            {gameDetails
              ? gameDetails.genres.map((genre) => genre.name).join(" • ")
              : "N/A"}
          </p>

          <p className="flex justify-center gap-2 font-medium">
            {gameDetails?.released.slice(0, 4)} - {gameDetails?.rating}
            <FaStar color="#FAB839" className="text-[23px]" />
          </p>
          <p className="font-medium">
            {gameDetails
              ? gameDetails.parent_platforms
                  .map((platform) => platform.platform.name)
                  .join(" • ")
              : "N/A"}
          </p>
        </div>

        <div className="mt-3">
          <Link to={`${gameDetails?.website}`} target="_blank">
            <span className="font-medium text-[17px] underline hover:text-blue-500">
              Visit {gameDetails?.name}
            </span>
          </Link>
        </div>

        {isLoading ? <Loader /> : <ImageSlider screenshots={screenshots} />}

        <div className={`${gameDetailsStyle.description}`}>
          {showFullDescription || description.length <= Max_Length ? (
            <p className="text-[15px]">{description}</p>
          ) : (
            <p className="text-[15px]">{description.slice(0, Max_Length)}...</p>
          )}
          {description.length > Max_Length && (
            <button
              onClick={toggleDescription}
              className="text-blue-500 hover:underline"
            >
              {showFullDescription ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
