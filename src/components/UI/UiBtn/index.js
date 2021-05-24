import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export default function UiBtn ({ type = 'button', linkPath, onClick, children }) {
  if (type === 'button') {
    return (
      <button
        className={styles.btn}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
  if (type === 'link') {
    return (
      <Link
        to={linkPath}
        className={styles.btn}
      >
        {children}
      </Link>
    )
  }
}