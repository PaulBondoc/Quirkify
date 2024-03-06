import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { navigationStyle } from "../../../styles/styles";

const Navigation = () => {
  return (
    <>
      <section>
        <div className="bg-gray">
          <div className={`${navigationStyle.container}`}>
            <div className={`${navigationStyle.column}`}>
              <Breadcrumbs
                aria-label="breadcrumb"
                sx={{
                  color: "#9D9D9D",
                  fontWeight: "medium",
                  fontSize: "14px",
                }}
              >
                <Link to={"/"} className="hover:underline">
                  Home
                </Link>
                <p className="text-white">Developers</p>
              </Breadcrumbs>
              <div>
                <h1 className={`text-[28px] font-bold tracking-wider`}>
                  List of <span className="gradient">Developers</span>
                </h1>
                <p className={`${navigationStyle.note}`}>
                  Note: All The Data Displayed Is Powered By{" "}
                  <Link
                    to={"https://rawg.io/apidocs"}
                    target="_blank"
                    className="underline hover:text-blue-500"
                  >
                    RAWG
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navigation;
