'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '../styles/home.module.css'

function Cadastrar() {
  const [tarefa, setTarefa] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    const tarefasExistentes = JSON.parse(localStorage.getItem('tarefas')) || []
    
    const novasTarefas = [...tarefasExistentes, tarefa]
    
    localStorage.setItem('tarefas', JSON.stringify(novasTarefas))
    
    router.push('/')
  }

  return (
    <main className={styles.main}>
      <h1>Cadastrar Nova Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tarefa">Nome da Tarefa:</label>
        <input
          id="tarefa"
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>
          Salvar
        </button>
      </form>
    </main>
  )
}

export default Cadastrar