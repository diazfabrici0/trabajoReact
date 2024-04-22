import { Button } from "@mui/material";

export const GenericButton = ({ text, onClick, disabled, buttonColor }) => {
  return (
    <Button
      variant="outlined"
      color={buttonColor || "primary"}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};
