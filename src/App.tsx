import { Header } from './components/Header'

import styles from './App.module.css'

import './globals.css'
import { NewTask } from './components/NewTask'
import { Content } from './components/Content'

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>
        <NewTask />

        <div className={styles.tasks}>
          <header>
            <div className={styles.tasksCount}>
              <strong>Tarefas criadas</strong>
              <span>0</span>
            </div>

            <div className={styles.tasksCompleted}>
              <strong>Concluídas</strong>
              <span>0</span>
            </div>
          </header>
        </div>

        <div className={styles.content}>
          <Content />
        </div>
      </main>
    </div>
  )
}
