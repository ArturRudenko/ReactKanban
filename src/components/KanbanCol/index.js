import React from 'react';
import styles from './styles.module.scss'

export default function KanbanCol ({title, alias, itemsAmount, onAdd, children}) {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        { !itemsAmount && <p>No tasks with this status</p> }
        <button
          className={styles.button}
          onClick={() => onAdd({status: alias})}
        >Add new</button>
      </div>
      <div>
        { children }
      </div>
    </div>
  )
}
