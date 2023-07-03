
import { FiCircle } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import styles from './Content.module.css'

export function Content () {
  return(
    <div className={styles.content}>
      <button className={styles.check}>
        <FiCircle />
      </button>

      <textarea className={styles.text}>
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ipsa culpa explicabo
        a modi consequatur dignissimos nihil alias
        eveniet cumque! Ullam atque explicabo ipsa? 
        Architecto praesentium tempore maiores! Nihil, 
        mollitia accusantium!
      </textarea>
      
      <button className={styles.delete}>
        <RiDeleteBin6Line />
      </button>
    </div>
  )
}

