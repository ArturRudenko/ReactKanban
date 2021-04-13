import React from 'react';
import styles from './styles.module.scss'

export default function KanbanCol (props) {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.title}>{props.title}</h2>
        { !props.itemsAmount && <p>No tasks in such satus</p> }
      </div>
      <div>
        { props.children }
      </div>
    </div>
  )
}
