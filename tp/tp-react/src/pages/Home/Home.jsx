import Button from "../../components/Button/Button";
import Title from '../../components/Title/Title';
import { useState } from "react";
import Input from "../../components/Input/Input";
import style from "./Home.module.css";

const Home = () => {

  const [actividades, setActividades] = useState([]);

  const [nuevaActividad, setNuevaActividad] = useState("");

  const [busqueda, setBusqueda] = useState("");
  
  const actividadesFiltradas = actividades.filter(actividad => actividad.name.toLowerCase().includes(busqueda.toLocaleLowerCase()));

  const actividadesCompletas = actividades.filter(actividad => actividad.completada === true).length;

  const onChangeHandler = (event) => {
    setNuevaActividad(event.target.value);
  }

  const onChangeBusqueda = (event) => {
    setBusqueda(event.target.value);
  }

  const guardarActividad = () => {
    const nuevaActividadAgregar = {
      name: nuevaActividad,
      completada: false
    };
    setActividades([...actividades, nuevaActividadAgregar]);
    setNuevaActividad("");
  };

  const eliminarActividad = (index) => {
    const nuevaLista = [...actividades];
    nuevaLista.splice(index, 1);
    setActividades(nuevaLista);
  };

  const completarActividad = (index) => {
    const actividadesActualizadas = [...actividades];
    actividadesActualizadas[index].completada = !actividadesActualizadas[index].completada;
    setActividades(actividadesActualizadas);
  };

  return (
    <div className={style.home}>
      <Title text="Aplicación: To-Do List" />      

      <div className={style.search}>
        <div>
            Buscar actividad:
        </div>
          <Input value={busqueda} onChangeHandler={onChangeBusqueda} placeholder="" />
      </div>
      
    <div className={style.addtask}>
      <Input value={nuevaActividad} onChangeHandler={onChangeHandler} placeholder="Escribe una actividad" />
      <Button text="Agregar actividad" onClick={guardarActividad} disabled={nuevaActividad ? "" : "disabled"} />
    </div>

    <div className = {style.tasklist}>
      {actividades.length === 0 ? ( 
        <p>No hay actividades para realizar</p>
      ) : (
        actividadesFiltradas.length === 0 ? (
          <p>No se encontraron coincidencias</p>
        ) : (
          actividadesFiltradas.map((actividad, index) => (
            <div className = {style.individualTask} key = {index}>
               <div style={{ textDecoration: actividad.completada ? 'line-through' : 'none' }} key={actividad.descripcion}>
                  <p>{actividad.name}</p>
                </div>
                <div>
                  <Button text={actividad.completada ? "Desmarcar actividad" : "Marcar como Completa"} onClick={() => completarActividad(index)}/>
                  <Button text="Eliminar actividad" onClick={() => eliminarActividad(index)}  />
                </div>
            </div>
          ))
        )
      )}
    </div>

    <div className = {style.counter}>
      <div>
        <p>Actividades Totales:</p> {actividades.length}
      </div>
      <div>
        <p>Actividades Completadas:</p> {actividadesCompletas}
      </div>
    </div>
  </div>
  );
};

export default Home;