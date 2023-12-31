import { Link } from "react-router-dom";

import Styles from "./card.module.css";

import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useAuthValue } from "../../context/AuthContext";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Card = ({ pal }) => {
  const { user } = useAuthValue();
  const handleDate = (date) => {
    return date.split("-").reverse().join("/");
  };

  const { updateDocument, response } = useUpdateDocument("palestras");

  const { deleteDocument } = useDeleteDocument("palestras");

  const handleSubmit = () => {
    if (pal.vagasOcupadas.includes(user.email)) {
      alert("Você já está cadastrado na palestra");
      return;
    }

    if (pal.vagasOcupadas.length >= 15) {
      alert("Não há vagas disponiveis");
      return;
    }

    const data = {
      palestra: pal.palestra,
      data: pal.data,
      hora: pal.hora,
      vagas: pal.vagas - 1,
      vagasOcupadas: [...pal.vagasOcupadas, user.email],
      createdAt: pal.createdAt,
      createdBy: pal.createdBy,
    };

    updateDocument(pal.id, data);

    alert("Sua inscrição foi confirmada na palestra");
  };

  return (
    <div className={Styles.card}>
      <div className={Styles.content}>
        <h1>{pal.palestra} </h1>
        <p>{pal.data && handleDate(pal.data)}</p>
        <p>{pal.hora}</p>
        <span>
          <p>vagas: {pal.vagas} de 15</p>
          <Link onClick={handleSubmit}>Inscrever-se</Link>
        </span>
        {user.uid == "1B08evtyPVNriz1jviCEA76RlFo2" ? (
          <Link onClick={() => deleteDocument(pal.id)}>Excluir</Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
