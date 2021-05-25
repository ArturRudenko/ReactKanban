import React from 'react'
import styles from './styles.module.scss'

export default function UiTextField ({ defaultValue, textarea, areaHeight = '75px', placeholder, onValueChange, onEnter }) {
  const onKeyEnter = (e) => {
    if (e.code === 'Enter') onEnter(e.target.value)
  }

  return (
    <div>
      { textarea
        ? <textarea
            value={defaultValue}
            placeholder={placeholder}
            className={styles.textArea}
            style={{height: areaHeight}}
            onKeyUp={onKeyEnter}
            onChange={({ target: { value } }) => onValueChange(value)}
          />
        : <input
            value={defaultValue}
            placeholder={placeholder}
            className={styles.textField}
            onKeyUp={onKeyEnter}
            onChange={({ target: { value } }) => onValueChange(value)}
          />
      }
    </div>
  )
}
