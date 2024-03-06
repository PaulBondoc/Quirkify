import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import ButtonComponent from "../../../components/ButtonComponent";
import { useEffect, useState } from "react";
import { fetchGamesList } from "../../../services/serviceApi";
import { type GameDataType } from "../../../types/types";
import { Link } from "react-router-dom";
import { Styles } from "../../../styles/styles";

const Sliders = () => {
  const [gameData, setGameData] = useState<GameDataType[]>([]);

  const getGameList = async () => {
    try {
      const fetchedData = await fetchGamesList(10);

      setGameData(fetchedData);
    } catch (error) {
      console.error("Error fetching game list from gamelist page.", error);
    }
  };

  useEffect(() => {
    getGameList();
  }, []);

  return (
    <>
      <section>
        <div className="grid grid-cols-12 gap-5">
          <div className={`${Styles.gameListSliderCol1}`}>
            <Swiper
              loop={true}
              modules={[Autoplay, Pagination]}
              pagination={true}
              autoplay={{
                delay: 3000,
              }}
              className="mySwiper"
            >
              {gameData.slice(0, 10).map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item.background_image}
                    alt={item.name}
                    className="w-full h-[350px] object-cover"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={`${Styles.gameListSliderCol2}`}>
            <Swiper
              loop={true}
              pagination={true}
              modules={[Pagination]}
              className="mySwiper h-[250px] lg:h-[300px] xl:h-[350px]"
            >
              {gameData.slice(10, 20).map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item.background_image}
                    alt={item.name}
                    className="w-full h-full object-cover absolute -z-[1] top-0 bottom-0"
                    loading="lazy"
                  />

                  <div className={`${Styles.gameListSliderTitle}`}>
                    <h1 className="text-[15px] xs:text-[20px] nosifer">
                      {item.name} ({item.released?.slice(0, 4)})
                    </h1>

                    <div className="mt-3">
                      <Link to={`/games/${item.id}`}>
                        <ButtonComponent
                          value="check details"
                          Icon={FaArrowRightLong}
                          fontSize="12px"
                        />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sliders;
