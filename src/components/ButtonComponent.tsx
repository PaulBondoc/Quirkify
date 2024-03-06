import { Button } from "@mui/material";

type ButtonProps = {
  value: string;
  Icon?: React.ElementType;
  fontSize?: string;
  width?: string;
};

const ButtonComponent = ({ value, Icon, fontSize, width }: ButtonProps) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(to right, #f67f29, #fab839)",
          borderTop: "1px solid rgba(255,255,255, .5)",
          borderLeft: "1px solid rgba(255,255,255, .5)",
          fontWeight: "bold",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "5px 25px",
          fontSize: { fontSize },
          width: { width },
          gap: "10px",
          "&:hover": {
            background: "linear-gradient(to right, #C6651F, #C28A2A)",
          },
        }}
      >
        {value}
        {Icon && <Icon className="text-[20px]" />}
      </Button>
    </>
  );
};

export default ButtonComponent;
