import React from 'react';
import styles from './styles.module.scss'

export default function KanbanItem ({ title, tags }) {
  return (
    <div className={styles.card}>
      <ul>
        {tags.map(tag =>
          <li style={{background: tag.color}}>{tag.title}</li>
        )}
      </ul>
      <p>{title}</p>
    </div>
  )
}