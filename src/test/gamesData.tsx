import { FaStar, FaXbox, FaPlaystation } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { MdNewReleases } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { type DataType } from "../types/types";

export const gamesData: DataType[] = [
  {
    id: 19590,
    name: "Ori and the Blind Forest",
    src: "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg",
    info: [
      { Icon: MdNewReleases, value: "2015-03-10" },
      { Icon: FaStar, value: 4.38 },
    ],
    description:
      "Ori and the Blind Forest tells the tale of a young orphan destined for heroics. Featuring hand-painted artwork, meticulously animated character performance, and a fully orchestrated score, Ori and the Blind Forest explores a deeply emotional story about love and sacrifice, and the hope that exists in us all.",
    genres: ["Adventure", "Platformer"],
    platforms: [
      { Icon: FaXbox, value: "Xbox 360" },
      { Icon: FaXbox, value: "Xbox One" },
      { Icon: RiComputerFill, value: "PC" },
    ],
  },
  {
    id: 10061,
    name: "Watch Dogs 2",
    src: "https://media.rawg.io/media/games/f52/f52cf6ba08089cd5f1a9c8f7fcc93d1f.jpg",
    info: [
      { Icon: MdNewReleases, value: "2016-11-28" },
      { Icon: FaStar, value: 3.84 },
    ],
    description:
      "Welcome to San Francisco. Play as Marcus, a brilliant young hacker, and join the most notorious hacker group, DedSec. Your objective: execute the biggest hack of history.",
    genres: ["Action", "Adventure"],
    platforms: [
      { Icon: FaXbox, value: "Xbox One" },
      { Icon: FaPlaystation, value: "PlayStation 4" },
      { Icon: RiComputerFill, value: "PC" },
    ],
  },
  {
    id: 3766,
    name: "Thief",
    src: "https://media.rawg.io/media/games/59a/59a3ebcba3d08c51532c6ca877aff256.jpg",
    info: [
      { Icon: MdNewReleases, value: "2014-02-25" },
      { Icon: FaStar, value: 3.25 },
    ],
    description:
      "Become the best thief. Gather intel, steal things and sell them to buy hi-tech equipment. Do everything that a real thief does.",
    genres: ["Action", "Adventure"],
    platforms: [
      { Icon: FaPlaystation, value: "PlayStation 4" },
      { Icon: FaPlaystation, value: "PlayStation 3" },
      { Icon: FaXbox, value: "Xbox 360" },
      { Icon: FaXbox, value: "Xbox One" },
      { Icon: RiComputerFill, value: "Mac OS" },
    ],
  },
  {
    id: 51325,
    name: "The Last of Us Part II",
    src: "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg",
    info: [
      { Icon: MdNewReleases, value: "2020-06-19" },
      { Icon: FaStar, value: 4.42 },
    ],
    description:
      "Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors.",
    genres: ["Action", "Shooter", "Adventure"],
    platforms: [
      { Icon: FaPlaystation, value: "PlayStation 4" },
      { Icon: FaPlaystation, value: "PlayStation 5" },
    ],
  },
  {
    id: 1090,
    name: "This War of Mine",
    src: "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg",
    info: [
      { Icon: MdNewReleases, value: "2014-11-14" },
      { Icon: FaStar, value: 4.07 },
    ],
    description:
      "In This War Of Mine you do not play as an elite soldier, rather a group of civilians trying to survive in a besieged city; struggling with lack of food, medicine and constant danger from snipers and hostile scavengers. The game provides an experience of war seen from an entirely new angle.",
    genres: ["Adventure", "Platformer"],
    platforms: [
      { Icon: MdOutlinePhoneAndroid, value: "Android" },
      { Icon: FaPlaystation, value: "PS Vita" },
      { Icon: BsNintendoSwitch, value: "Nintendo Switch" },
    ],
  },
];
