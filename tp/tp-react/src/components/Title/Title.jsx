import { Typography } from "@mui/material";

export const Title = ({ text }) => {
  return (
    <div>
      <Typography align="center" variant="h4">
        {text}
      </Typography>
    </div>
  );
};
