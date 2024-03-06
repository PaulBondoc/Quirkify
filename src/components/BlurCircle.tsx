import { Styles } from "../styles/styles";

const BlurCircle = () => {
  return (
    <>
      <div>
        <div
          className={`${Styles.blurCircle} rounded-r-full left-0 top-[150px] bg-gradient-start`}
        ></div>
        <div
          className={`${Styles.blurCircle} rounded-l-full right-0 top-[300px] bg-gradient-stop`}
        ></div>
      </div>
    </>
  );
};

export default BlurCircle;
