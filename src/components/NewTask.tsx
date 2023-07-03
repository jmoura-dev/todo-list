import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from './NewTask.module.css';

export function NewTask () {
  return (
    <div className={styles.newTask}>
      <input type="text" placeholder="Adicione uma nova tarefa"/>

      <button className={styles.create}>
        Criar
        <AiOutlinePlusCircle />
      </button>
    </div>
  )
}