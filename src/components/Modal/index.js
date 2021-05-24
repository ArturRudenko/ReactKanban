import React from 'react';
import styles from './styles.module.scss'

export default function Modal ({show, onClose, children}) {
  const onModalClose = ({ target }) => {
    if (target.className === styles.modal) onClose()
  }

  return (
    <div
      style={{display: show ? 'flex' : 'none'}}
      className={styles.modal}
      onClick={onModalClose}
    >
      <div className={styles.modalBody}>
        {children}
      </div>
    </div>
  )
};