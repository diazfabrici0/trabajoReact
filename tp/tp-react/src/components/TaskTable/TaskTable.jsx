import Swal from "sweetalert2";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { GenericButton } from "../GenericButton/GenericButton";

export const TaskTable = ({ task, setActividades }) => {
  const completarActividad = (index) => {
    const actividadesActualizadas = [...task];
    actividadesActualizadas[index].completada =
      !actividadesActualizadas[index].completada;
    setActividades(actividadesActualizadas);
  };

  const eliminarActividad = (index) => {
    Swal.fire({
      title: "¿Esta seguro?",
      text: "No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar Tarea!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Tarea Eliminada",
          text: "La tarea fue eliminada",
          icon: "success",
        }).then(() => {
          const nuevaLista = [...task];
          nuevaLista.splice(index, 1);
          setActividades(nuevaLista);
        });
      }
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre Tarea</TableCell>
            <TableCell>Descripcion Tarea</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {task.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{
                  textDecoration: row.completada ? "line-through" : "none",
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{
                  textDecoration: row.completada ? "line-through" : "none",
                }}
              >
                {row.description}
              </TableCell>
              <TableCell>
                <div style={{ display: "flex", gap: "10px" }}>
                  <GenericButton
                    text={
                      row.completada ? "Desmarcar Tarea" : "Tarea Completada"
                    }
                    buttonColor="success"
                    onClick={() => completarActividad(index)}
                  />
                  <GenericButton
                    text="Eliminar actividad"
                    onClick={() => eliminarActividad(index)}
                    buttonColor="error"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
