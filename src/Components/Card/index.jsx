import { Link } from "react-router-dom";
import Button from "../Button";
import Styles from "./card.module.css";

const Card = ({ pal }) => {
  const handleDate = (date) => {
    return date.split("-").reverse().join("/");
  };

  return (
    <div className={Styles.card}>
      <div className={Styles.content}>
        <h1>{pal.palestra} </h1>
        <p>{handleDate(pal.data)}</p>
        <p>{pal.hora}</p>
        <span>
          <p>vagas: 2 de {pal.vagas}</p>
          <Link to="/confirmarpalestra">Inscrever-se</Link>
        </span>
      </div>
    </div>
  );
};

export default Card;
