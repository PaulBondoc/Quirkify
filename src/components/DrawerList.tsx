import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { MdDeveloperBoard, MdGames } from "react-icons/md";
import { SiGradleplaypublisher } from "react-icons/si";
import { FaHome } from "react-icons/fa";

type Props = {
  toggleDrawer: (arg: boolean) => void;
  open: boolean;
};

type Links = {
  path: string;
  text: string;
  icon: React.ElementType;
};

const DrawerList = ({ toggleDrawer, open }: Props) => {
  const Links: Links[] = [
    { path: "/", text: "Home", icon: FaHome },
    { path: "/developers", text: "Developers", icon: MdDeveloperBoard },
    { path: "/publishers", text: "Publishers", icon: SiGradleplaypublisher },
    { path: "/games", text: "Games", icon: MdGames },
  ];

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        {Links.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link to={item.path} className="w-full">
              <ListItemButton>
                <ListItemIcon>
                  <item.icon className="text-[25px]" />
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
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default DrawerList;
