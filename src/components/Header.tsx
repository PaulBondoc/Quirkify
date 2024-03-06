import { Link } from "react-router-dom";
import { Styles } from "../styles/styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconButton } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MdDeveloperBoard, MdGames } from "react-icons/md";
import { SiGradleplaypublisher } from "react-icons/si";
import { FaHome } from "react-icons/fa";

type Links = {
  path: string;
  text: string;
  Icon: React.ElementType;
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const Links: Links[] = [
    { path: "/", text: "Home", Icon: FaHome },
    { path: "/developers", text: "Developers", Icon: MdDeveloperBoard },
    { path: "/publishers", text: "Publishers", Icon: SiGradleplaypublisher },
    { path: "/games", text: "Games", Icon: MdGames },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {Links.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link to={item.path} className="w-full">
              <ListItemButton>
                <ListItemIcon>
                  <item.Icon className="text-[25px]" />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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

          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
      </header>
    </>
  );
};

export default Header;
