import DeveloperCard from "../../../components/DeveloperCard";
import Loader from "../../../components/Loader";
import { Styles } from "../../../styles/styles";

type DeveloperData = {
  name: string;
  image: string;
};

type Props = {
  developers: DeveloperData[] | undefined;
  isLoading: boolean;
};

const DevelopmentTeam = ({ developers, isLoading }: Props) => {
  return (
    <>
      <section className="my-[1.5rem] md:my-[3rem]">
        <h1 className={`text-start nosifer text-[20px] xsm:text-[25px]`}>
          Part of
          <span className={`${Styles.gradientText}`}> Development Team</span>
        </h1>

        <div className="md:mt-[1rem] flex gap-5 overflow-auto py-5">
          {isLoading ? (
            <Loader />
          ) : developers && developers.length > 0 ? (
            developers.map((developer, index) => (
              <DeveloperCard
                key={index}
                name={developer.name}
                image={developer.image}
              />
            ))
          ) : (
            <p className="text-[20px] text-[gray] font-semibold">
              Can't Find The Developers
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default DevelopmentTeam;
