
import { TextareaHTMLAttributes } from 'react'

import { FiCircle } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiFillCheckCircle } from 'react-icons/ai'

import styles from './Content.module.css'

export interface ContentProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onClick: () => void;
  content: string
  onComplete: () => void;
  completed: boolean
}

export function Content ({ content, onClick, onComplete, completed }: ContentProps) {

  return(
    <div 
      className={styles.content}
    >
      <button 
        className={styles.check}
        onClick={onComplete}
      >
        {completed ? <AiFillCheckCircle className={styles.concluded} /> : <FiCircle />}
      </button>

      <textarea 
        className={styles.text}
        readOnly
        disabled={completed}
        value={content}
      />
      
      <button 
        className={styles.delete}
        onClick={onClick}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  )
}

