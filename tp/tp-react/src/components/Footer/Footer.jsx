import { Grid } from "@mui/material";
import { SubTitle } from "../SubTitle/SubTitle";

export const Footer = () => (
  <footer
    style={{
      padding: "20px",
      borderTop: "1px solid #ccc",
      marginTop: "10px",
    }}
  >
    <Grid container spacing={5} justifyContent="center" alignItems="center">
      <Grid item xs={8}>
        <SubTitle text="Desarrollado por Diaz Fabricio, Centena Jose, Cayuqueo Nacho" />
        <SubTitle text="Grupo 6 - Programación Web Avanzada" />
      </Grid>
    </Grid>
  </footer>
);
