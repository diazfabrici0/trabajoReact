import { useState } from "react";
import {
  Footer,
  GenericButton,
  InfoCard,
  Input,
  TaskFinder,
  TaskTable,
  TextArea,
  Title,
} from "../../components";
import { Box, Grid } from "@mui/material";

const Home = () => {
  const [actividades, setActividades] = useState([]);

  const [nuevaActividad, setNuevaActividad] = useState("");
  const [descripcionActividad, setDescripcionActividad] = useState("");

  const [busqueda, setBusqueda] = useState("");

  const actividadesFiltradas = actividades.filter((actividad) =>
    actividad.name.toLowerCase().includes(busqueda.toLocaleLowerCase())
  );

  const actividadesCompletas = actividades.filter(
    (actividad) => actividad.completada === true
  ).length;

  const onChangeHandler = (event) => {
    setNuevaActividad(event.target.value);
  };

  const onChangeHandlerTextArea = (event) => {
    setDescripcionActividad(event.target.value);
  };

  const onChangeBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  const guardarActividad = () => {
    const nuevaActividadAgregar = {
      name: nuevaActividad,
      description: descripcionActividad,
      completada: false,
    };
    setActividades([...actividades, nuevaActividadAgregar]);
    setNuevaActividad("");
    setDescripcionActividad("");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        px: 3,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        marginTop: "20px",
      }}
    >
      <div style={{ marginBottom: "auto" }}>
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Title text="Aplicación: To-Do List" />
          </Grid>
          <Grid item xs={12}>
            <TaskFinder
              value={busqueda}
              onChangeHandler={onChangeBusqueda}
              label="Buscar Tarea"
            />
          </Grid>

          <Grid item xs={4}>
            <Box
              sx={{
                "& > :not(style)": { m: 1 },
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Input
                value={nuevaActividad}
                onChangeHandler={onChangeHandler}
                label="Escribe una actividad"
              />
              <TextArea
                value={descripcionActividad}
                onChangeHandler={onChangeHandlerTextArea}
                label="Descripcion"
              />
              <GenericButton
                text="Agregar actividad"
                onClick={guardarActividad}
                disabled={nuevaActividad && descripcionActividad ? false : true}
              />
            </Box>
          </Grid>

          <Grid item xs={8}>
            {actividades.length === 0 ? (
              <InfoCard
                text="No hay actividades para realizar"
                textColor="#111111"
                borderColor="#200583"
              />
            ) : actividadesFiltradas.length === 0 ? (
              <InfoCard
                text="No se encontraron coincidencias"
                textColor="#E91E63"
                borderColor="#E91E63"
              />
            ) : (
              <TaskTable
                task={actividadesFiltradas}
                setActividades={setActividades}
              />
            )}
          </Grid>

          <Grid item xs={6}>
            <InfoCard
              text={`Actividades Totales: ${actividades.length} - Actividades Completadas: ${actividadesCompletas}`}
            />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </Box>
  );
};

export default Home;
