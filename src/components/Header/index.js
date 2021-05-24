import React from 'react';
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Kanban</h1>
      <div>
        <Link
          to='/'
          className={styles.headerBtn}
        >desk</Link>
        <span className={styles.headerBtn}> | </span>
        <Link
          to='/tags'
          className={styles.headerBtn}
        >tags</Link>
      </div>
    </header>
  )
};