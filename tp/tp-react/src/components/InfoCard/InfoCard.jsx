import { Card, CardContent, Typography } from "@mui/material";

export const InfoCard = ({ text, textColor, borderColor }) => {
  return (
    <Card
      sx={{
        textAlign: "center",
        padding: "20px",
        border: `2px solid ${borderColor}`,
      }}
    >
      <CardContent>
        <Typography variant="body1" sx={{ color: textColor }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
