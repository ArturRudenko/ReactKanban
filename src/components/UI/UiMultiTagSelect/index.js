import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'

export default function UiMultiTagSelect ({ defaultSelectedTags, allTags, onSelect }) {
  const [selectedTags, setSelectedTags] = useState(defaultSelectedTags)
  const [showTags, setShowTags] = useState(false)

  useEffect(() => onSelect(selectedTags))

  const checkSelected = (tag) => {
    return selectedTags.some(item => item.id === tag.id)
  }

  const changeSelected = (tag) => {
    if (checkSelected(tag)) {
      setSelectedTags(selectedTags.filter(item => item.id !== tag.id))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
    setShowTags(false)
  }

  return (
    <div className={styles.select}>
      <div
        className={styles.output}
        onClick={() => setShowTags(!showTags)}
      >
        {
          selectedTags.map((tag) =>
            <span
              key={tag.id}
              style={{background: tag.color}}
              className={styles.outputTag}
            >{tag.title}</span>
          )
        }
      </div>
      {
        showTags &&
        <div className={styles.selectTags}>
          {
            allTags.map((tag) =>
              <div
                key={tag.id}
                style={{color: tag.color}}
                className={checkSelected(tag) ? styles.selectedTag : styles.selectTag}
                onClick={() => changeSelected(tag)}
              >{tag.title}</div>
            )
          }
        </div>
      }
    </div>
  )
}
