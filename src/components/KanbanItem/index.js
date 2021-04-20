import React from 'react';
import styles from './styles.module.scss'

export default function KanbanItem ({ title, date, tags }) {
  return (
    <div className={styles.card}>
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
