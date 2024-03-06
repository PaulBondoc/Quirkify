import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
// import GenreList from "../../../components/GenreList";
import Searchbar from "../../../components/Searchbar";
import { navigationStyle } from "../../../styles/styles";

type Props = {
  query: string | null;
};

const Navigation = ({ query }: Props) => {
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
                <Link to={"/games"} className="hover:underline">
                  Games
                </Link>
                <p className="text-white">Search</p>
              </Breadcrumbs>
              <div>
                <h1
                  className={`text-[20px] xsm:text-[25px] font-medium tracking-wider`}
                >
                  Search Result For: "{query}"
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

            <div className={`${navigationStyle.searchBarDiv}`}>
              <Searchbar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navigation;
