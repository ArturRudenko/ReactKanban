import React from 'react'
import styles from './styles.module.scss'

export default function UiBtn ({ children }) {
  return (
    <button className={styles.btn}>
      {children}
    </button>
  )
}