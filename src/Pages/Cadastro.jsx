import styles from "./Login.module.css"

// img
import PdpLogin from "../img/pdp.png"

// components
import Input from "../Components/Input"
import Button from "../Components/Button"

const Cadastro = () => {
    return (
        <div className={styles.container}>
            
            <img src={PdpLogin} alt="Logo PDP MICROLINS" />
            <h1> Criar Conta </h1>
            <form className={styles.form}>
              <Input placeholder="Digite o usuário" type="email" />
              <Input placeholder="Digite a senha" type="password"/>
              <Input placeholder="Confirme a senha" type="password"/>

              <Button title="Criar conta" />
            </form>
    
        </div>
    )
}

export default Cadastro