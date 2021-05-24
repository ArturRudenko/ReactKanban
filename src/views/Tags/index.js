import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss'
import UiBtn from '../../components/UI/UiBtn';

export default function Tags () {
  const tags = useSelector(state => state.tags)

  return (
    <div className={styles.tagsWrapper}>
      <ul className={styles.tagList}>
        {
          tags.map((tag) =>
            <li
              key={tag.id}
              className={styles.tag}
            >
              <span className={styles.tagTitle}>{tag.title}</span>
              <UiBtn>Update</UiBtn>
              <span style={{display: 'inline-block', width: '15px'}} />
              <UiBtn>Remove</UiBtn>
            </li>
          )
        }
      </ul>
    </div>
  )
}