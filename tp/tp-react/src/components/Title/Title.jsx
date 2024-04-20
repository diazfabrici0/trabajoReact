import style from './Title.module.css';

const Title = ({text}) => {
  return (
    <div className={style.title}>
      <h1>{text}</h1>
      <p><b>Grupo 6:</b> Diaz, Fabricio | Centena, Jose | Nacho Cayuqueo</p>
    </div>
  );
};

export default Title;