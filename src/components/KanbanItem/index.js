import React, { useState } from 'react';
import styles from './styles.module.scss'
import menuIcon from '../../assets/images/menu.svg'

export default function KanbanItem ({ task, onUpdate }) {
  const [showMenu, setShowMenu] = useState(false)

  const updateTask = () => {
    onUpdate(task)
    setShowMenu(false)
  }

  return (
    <div className={styles.card}>
      <button
        className={styles.cardMenuBtn}
        onClick={() => setShowMenu(!showMenu)}
      >
        <img
          className={styles.cardMenuImg}
          src={menuIcon}
          alt="menu icon"
          draggable="false"
        />
      </button>
      {
        showMenu &&
        <div className={styles.cardMenuContent}>
          <button
            className={styles.cardMenuOption}
            onClick={() => updateTask()}
          >Update</button>
          <button className={styles.cardMenuOption}>Remove</button>
        </div>
      }
      <ul className={styles.tagList}>
        {task.tags.map(tag =>
          <li
            key={tag.id}
            style={{background: tag.color}}
            className={styles.tag}
          >{tag.title}</li>
        )}
      </ul>
      <p>{task.title}</p>
      <p className={styles.cardDate}>
        {`${task.date.getDate()}.${task.date.getMonth()}.${task.date.getFullYear()}`}
      </p>
    </div>
  )
}
