'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/home.module.css'

function Home() {
  const [tarefas, setTarefas] = useState([])

  return (
    <main className={styles.main}>
      <h1>Sistema de Cadastro de Tarefas</h1>
      <p>Bem-vindo ao sistema de cadastro de tarefas.</p>
      <hr className={styles.hr} />  
      <div>
        <h2>Lista de Tarefas</h2>
        {tarefas.length > 0 ? (
          <ul>
            {tarefas.map((tarefa, index) => (
              <li key={index}>{tarefa}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma tarefa cadastrada.</p>
        )}
      </div>
      <hr className={styles.hr} />
      
      <div>
        <Link href="/cadastrar">
          <button className={styles.button}>Cadastrar Nova Tarefa</button>
        </Link>
      </div>
    </main>
  )
}

export default Home