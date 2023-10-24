import styles from "./Login.module.css"

// img
import PdpLogin from "../img/pdp.png"

// components
import Input from "../Components/Input"
import Button from "../Components/Button"


const Login = () => {
  return (
    <div className={styles.container}>
        
        <img src={PdpLogin} alt="Logo PDP MICROLINS" />
        <form className={styles.form}>
          <Input placeholder="Digite o usuário" type="email" />
          <Input placeholder="Digite a senha" type="password"/>
          <Button title="Entrar" />
          <Button title="Criar" />
        </form>

    </div>
  )
}

export default Login