import { Link } from "react-router-dom";
import { Styles } from "../styles/styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconButton } from "@mui/material";
import { useState } from "react";
import DrawerList from "./DrawerList";

type Links = {
  path: string;
  text: string;
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const Links: Links[] = [
    { path: "/", text: "Home" },
    { path: "/developers", text: "Developers" },
    { path: "/publishers", text: "Publishers" },
    { path: "/games", text: "Games" },
  ];

  return (
    <>
      <header className={`${Styles.header}`}>
        <div>
          <Link to="/" className={`${Styles.logo}`}>
            <span className={`${Styles.gradientText}`}>QUIRK</span>IFY
          </Link>
        </div>
        <div className="flex items-center gap-1 lg:gap-8">
          <div className={`${Styles.navbar}`}>
            {Links.map((item, index) => (
              <Link key={index} to={item.path} className={`${Styles.links}`}>
                {item.text}
              </Link>
            ))}
          </div>

          <div className="block lg:hidden">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
            >
              <GiHamburgerMenu className=" text-white text-[25px]" />
            </IconButton>
          </div>

          <DrawerList toggleDrawer={toggleDrawer} open={open} />
        </div>
      </header>
    </>
  );
};

export default Header;
