import { gameSliderStyle } from "../../../styles/styles";
import ButtonComponent from "../../../components/ButtonComponent";
import { gamesData } from "../../../test/gamesData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const DetailsSection = () => {
  return (
    <>
      <section className={`${gameSliderStyle.sliderSection}`}>
        <Swiper
          loop={true}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {gamesData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`${gameSliderStyle.container}`}>
                <img
                  src={item.src}
                  alt={item.name}
                  loading="lazy"
                  className={`${gameSliderStyle.image}`}
                />
                <div className="w-full lg:w-[50%] lg:py-0 p-5">
                  <h1 className={`${gameSliderStyle.name}`}>{item.name}</h1>
                  <div className="my-3 flex flex-wrap items-center gap-3">
                    {item.genres.map((genre, index) => (
                      <p key={index} className={`${gameSliderStyle.genre}`}>
                        {genre}
                      </p>
                    ))}
                  </div>

                  <p className={`${gameSliderStyle.description}`}>
                    {item.description}
                  </p>

                  <div className="my-3 flex gap-5">
                    {item.info.map((info, index) => (
                      <p key={index} className={`${gameSliderStyle.info}`}>
                        <info.Icon className={`${gameSliderStyle.infoIcon}`} />
                        <span className="font-medium px-3">{info.value}</span>
                      </p>
                    ))}
                  </div>

                  <span className="mt-3 font-medium">Available in:</span>
                  <div className="flex flex-wrap gap-x-5 gap-y-3 mt-1">
                    {item.platforms.map((platform, index) => (
                      <div
                        key={index}
                        className={`${gameSliderStyle.platform}`}
                      >
                        <div className={`${gameSliderStyle.platformIcon}`}>
                          <platform.Icon className="text-[20px]" />
                        </div>
                        <p className="font-medium">{platform.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <Link to={`/games/${item.id}`}>
                      <ButtonComponent
                        value="Check Details"
                        Icon={FaArrowRightLong}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default DetailsSection;
