import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  src: string;
  description: string;
};

const CardComponent = ({ name, src, description, id }: Props) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 320,
          background: "#292929",
          borderTop: "2px solid rgba(255,255,255, .5)",
          borderLeft: "2px solid rgba(255,255,255, .5)",
          "&:hover": {
            transform: "scale(1.025)",
          },
          transition: ".1s linear",
        }}
      >
        <Link to={`/games/${id}`}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={src} alt={name} />
            <CardContent sx={{ color: "#fff" }}>
              <h1 className="font-bold tracking-wide text-[20px]">{name}</h1>
              <p className="mt-2 text-[12px] text-justify">{description}</p>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
};

export default CardComponent;
