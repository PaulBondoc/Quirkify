import Games from "../../../assets/icons/games.png";
import Camera from "../../../assets/icons/camera.png";
import Publishers from "../../../assets/icons/publishers.png";
import { Styles } from "../../../styles/styles";

type DetailsDataType = {
  src: string;
  value: string;
  subTitle: string;
};

const Details = () => {
  const detailsData: DetailsDataType[] = [
    { src: Games, value: "500,000+", subTitle: "List of Games " },
    { src: Camera, value: "2,100,000+", subTitle: "Screenshots" },
    { src: Publishers, value: "70,000+", subTitle: "Publishers" },
  ];
  return (
    <>
      <section>
        <div className={`${Styles.details}`}>
          {detailsData.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <img
                src={item.src}
                alt={item.subTitle}
                loading="lazy"
                className="w-[40px] rounded-[5px]"
              />
              <div className="">
                <p className="text-[23px] font-semibold">{item.value}</p>
                <p className="text-[13px]">{item.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Details;
