import React from 'react';
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux';
import { updateTaskStatus } from '../../actions';

export default function KanbanCol ({title, alias, itemsAmount, onAdd, children}) {
  const dispatch = useDispatch()

  const onDragStart = (e) => {
    if (!e.target.dataset.id) return
    e.target.style.background = '#848482'
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', e.target.dataset.id);
  }

  const onDragEnd = (e) => {
    e.target.style.background = '#FFF'
  }

  const onDrop = (e) => {
    const draggedItem = {
      id: e.dataTransfer.getData('text'),
      status: e.target.dataset.status
    }

    if (!e.target.dataset.status) {
      let target = e.target.closest(`.${styles.wrapper}`)
      draggedItem.status = target.dataset.status
    }

    dispatch(updateTaskStatus({
      id: draggedItem.id,
      status: draggedItem.status
    }))
  }

  return (
    <div
      className={styles.wrapper}
      data-status={alias}
      onDragOver={(e) => e.preventDefault()}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDrop={onDrop}
    >
      <div>
        <h2 className={styles.title}>{title}</h2>
        { !itemsAmount && <p>No tasks with this status</p> }
        <button
          className={styles.button}
          onClick={() => onAdd({status: alias})}
        >Add new</button>
      </div>
      <div>
        { children }
      </div>
    </div>
  )
}
