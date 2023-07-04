import { Header } from './components/Header'

import styles from './App.module.css'

import './globals.css'
import { NewTask } from './components/NewTask'
import { Content } from './components/Content'
import { useEffect, useState } from 'react'

interface Task {
  name: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState<string>("")

  const [amount, setAmount] = useState<number>(0)
  const [completedAmount, setCompletedAmount] = useState<number>(0)

  function handleAddNewTask(): void {
    const checkTasks = tasks.find(task => task.name === newTask)

    if (checkTasks) {
      return alert("it tasks already exist")
    }

    if (newTask === '') {
      return alert('Unable to register an empty task. Please type Something. ')
    }

    const newTaskObj: Task = {
      name: newTask,
      completed: false,
    }

    setTasks([...tasks, newTaskObj])
    setNewTask("")
  }

  function handleDeleteTask (deletedTask: string) {
    const newTasksWithOneDeleted = tasks.filter(task => {
      return task.name !== deletedTask
    })

    return setTasks(newTasksWithOneDeleted)
  }

  function handleToggleComplete(taskName: string) {
    const updatedTasks = tasks.map((task) => {
      if(task.name === taskName) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task
    })

    setTasks(updatedTasks)
  }

  useEffect(() => {
    setAmount(tasks.length)
    const completedTasks = tasks.filter((task) => task.completed);
    setCompletedAmount(completedTasks.length)
  }, [tasks])

  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>
        <NewTask
          onChange={event => setNewTask(event.target.value)}
          onClick={handleAddNewTask}
          value={newTask}
        />

        <div className={styles.tasks}>
          <header>
            <div className={styles.tasksCount}>
              <strong>Tarefas criadas</strong>
              <span>{amount}</span>
            </div>

            <div className={styles.tasksCompleted}>
              <strong>Concluídas</strong>
              <span>{`${completedAmount} de ${amount}`}</span>
            </div>
          </header>
        </div>

        <div className={styles.content}>
          <ul>
            {tasks.map((task) => {
              return (
                <Content
                  key={task.name}
                  content={task.name}
                  onClick={() => handleDeleteTask(task.name)}
                  onComplete={() => handleToggleComplete(task.name)}
                  completed={task.completed}
                />
              )
          })}
          </ul>
        </div>
      </main>
    </div>
  )
}
