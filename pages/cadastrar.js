'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '../styles/home.module.css'

function Cadastrar() {
  const [tarefa, setTarefa] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Tarefa cadastrada:', tarefa)
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