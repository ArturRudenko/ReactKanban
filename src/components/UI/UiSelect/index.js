import React from 'react'
import styles from './styles.module.scss'

export default function UiSelect ({ defaultValue, options, onStatusChange }) {
  return (
    <div>
      <select
        value={defaultValue}
        className={styles.select}
        onChange={({ target: { value } }) => onStatusChange(value)}
      >
        {
          options.map((option, index) =>
            <option
              key={index}
              value={option.alias}
              className={styles.selectOption}
            >{option.title}</option>
          )
        }
      </select>
    </div>
  )
}
