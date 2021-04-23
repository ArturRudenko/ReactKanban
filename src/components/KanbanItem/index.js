import React, { useState } from 'react';
import styles from './styles.module.scss'
import menuIcon from '../../assets/images/menu.svg'

export default function KanbanItem ({ title, date, tags }) {
  const [showMenu, setShowMenu] = useState(false)

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
          <button className={styles.cardMenuOption}>Update</button>
          <button className={styles.cardMenuOption}>Remove</button>
        </div>
      }
      <ul className={styles.tagList}>
        {tags.map(tag =>
          <li
            key={tag.id}
            style={{background: tag.color}}
            className={styles.tag}
          >{tag.title}</li>
        )}
      </ul>
      <p>{title}</p>
      <p className={styles.cardDate}>{date}</p>
    </div>
  )
}
