export type DataType = {
  id: number;
  name: string;
  src: string;
  info: InfoType[];
  description: string;
  genres: string[];
  platforms: PlatformType[];
};

type InfoType = {
  Icon: React.ElementType;
  value: string | number;
};

type PlatformType = {
  Icon: React.ElementType;
  value: string;
};

export type GameDataType = {
  id?: number;
  name?: string;
  background_image?: string;
  rating?: number;
  released?: string;
};

type Platform = {
  name: string;
};

type String = {
  name: string;
  platform: Platform;
};

export type DetailsType = {
  name: string;
  genres: String[];
  released: string;
  rating: number;
  parent_platforms: String[];
  description_raw: string;
  website: string;
};

type GameType = {
  id: number;
  name: string;
  added: number;
};

export type DeveloperType = {
  name: string;
  games_count: number;
  image_background: string;
  games: GameType[];
};
