import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles/styles.css";
import { gameDetailsStyle } from "../../../styles/styles";

type Screenshots = {
  image: string;
};

type Props = {
  screenshots?: Screenshots[];
};

const ImageSlider = ({ screenshots }: Props) => {
  return (
    <>
      <div className={`${gameDetailsStyle.sliderDiv}`}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-container"
        >
          {screenshots?.map((image, index) => (
            <SwiperSlide
              key={index}
              className="w-[300px] md:w-[400px] h-full relative"
            >
              <img
                src={image.image}
                alt={image.image}
                className={`${gameDetailsStyle.sliderImage}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ImageSlider;
