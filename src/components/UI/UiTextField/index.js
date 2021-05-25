import React from 'react'
import styles from './styles.module.scss'

export default function UiTextField ({ defaultValue, textarea, areaHeight = '75px', placeholder, onValueChange }) {
  return (
    <div>
      { textarea
        ? <textarea
            value={defaultValue}
            placeholder={placeholder}
            className={styles.textArea}
            style={{height: areaHeight}}
            onChange={({ target: { value } }) => onValueChange(value)}
          />
        : <input
            value={defaultValue}
            placeholder={placeholder}
            className={styles.textField}
            onChange={({ target: { value } }) => onValueChange(value)}
          />
      }
    </div>
  )
}
