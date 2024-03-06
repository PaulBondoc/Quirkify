import { useEffect } from "react";
import { addAnimation } from "../../../utils/animationUtils";
import { sampleImageData } from "../../../test/testData";
import "./styles/Animation.css";
import { Styles } from "../../../styles/styles";

type AnimationType = {
  speed: string;
  direction: string;
};

const InfiniteAnimation = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll<HTMLElement>(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  const animationData: AnimationType[] = [
    { speed: "fast", direction: "left" },
    { speed: "slow", direction: "right" },
    { speed: "medium", direction: "left" },
  ];

  return (
    <>
      <section className={`${Styles.animationSection}`}>
        {animationData.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[1000px] mx-auto scroller"
            data-speed={item.speed}
            data-direction={item.direction}
          >
            <div className="scroller__inner gap-[.5rem] xs:gap-[1rem]">
              {sampleImageData.map((item, index) => (
                <div key={index}>
                  <img src={item} alt={item} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default InfiniteAnimation;
