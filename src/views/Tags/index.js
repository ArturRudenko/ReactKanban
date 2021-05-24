import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.scss'
import UiBtn from '../../components/UI/UiBtn';
import { removeTag } from '../../actions';

export default function Tags () {
  const tags = useSelector(state => state.tags)
  const dispatch = useDispatch()

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
              <UiBtn
                type={'link'}
                linkPath={`/tags/${tag.id}`}
              >Update</UiBtn>
              <span style={{display: 'inline-block', width: '15px'}} />
              <UiBtn onClick={() => dispatch(removeTag(tag.id))}>Remove</UiBtn>
            </li>
          )
        }
      </ul>
    </div>
  )
}