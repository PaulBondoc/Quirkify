import { Link } from "react-router-dom";
import { Styles } from "../styles/styles";
import Links from "./Links";

const Footer = () => {
  return (
    <>
      <footer className={`${Styles.footer}`}>
        <div>
          <Link to="/" className={`${Styles.logo}`}>
            <span className={`${Styles.gradientText}`}>QUIRK</span>IFY
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium text-[12.5px] xs:text-[14px]">
            Design & Built By Paul Bondoc Using{" "}
            <Link
              to={"https://rawg.io/apidocs"}
              target="_blank"
              className="underline hover:text-blue-500"
            >
              RAWG API
            </Link>
          </p>
          <p className="font-medium text-[12.5px] xs:text-[14px]">
            Copyright © 2024 - All right reserved
          </p>

          <Links />
        </div>
      </footer>
    </>
  );
};

export default Footer;
