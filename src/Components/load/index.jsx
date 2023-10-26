import React from 'react'
import LoadImage from "../../img/load.gif"
import styles from "./Load.module.css";

const load = () => {
  return (
    <div className={styles.spinner}>
        <img src={LoadImage} />
    </div>
  )
}

export default load