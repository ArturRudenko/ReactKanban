import React from 'react';
import styles from './styles.module.scss'

export default function KanbanCol ({title, itemsAmount, children}) {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        { !itemsAmount && <p>No tasks in such satus</p> }
      </div>
      <div>
        { children }
      </div>
    </div>
  )
}
