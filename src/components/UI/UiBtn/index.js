import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export default function UiBtn ({ type = 'button', linkPath, children }) {
  if (type === 'button') {
    return (
      <button className={styles.btn}>
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