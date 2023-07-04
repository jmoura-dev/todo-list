import { InputHTMLAttributes } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from './NewTask.module.css';

interface NewTaskProps extends InputHTMLAttributes<HTMLInputElement> {
  onClick: () => void;
}

export function NewTask ({ value, onChange, onClick }: NewTaskProps) {

  return (
    <div className={styles.newTask}>
      <input
        type='text' 
        placeholder="Adicione uma nova tarefa"
        onChange={onChange}
        value={value}
      />

      <button 
        className={styles.create}
        onClick={onClick}
      >
        Criar
        <AiOutlinePlusCircle className={styles.icon}/>
      </button>
    </div>
  )
}