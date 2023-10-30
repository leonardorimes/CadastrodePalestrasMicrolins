import Button from "../Button";
import Styles from "./card.module.css";

const Card = () => {
  return (
    <div className={Styles.card}>
      <div className={Styles.content}>
        <h1>Empreendedorismo</h1>
        <p>26/05</p>
        <p>18:00</p>
        <span>
          <p>vagas: 2 de 15 </p>
          <Button title="Inscrever-se" />
        </span>
      </div>
    </div>
  );
};

export default Card;
