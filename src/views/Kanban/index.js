import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../../actions';
import styles from './styles.module.scss';
import KanbanCol from '../../components/KanbanCol';
import KanbanItem from '../../components/KanbanItem';
import Modal from '../../components/Modal';
import UiTaskForm from '../../components/UI/UiTaskForm';

export default function Kanban () {
  const columns = useSelector(state => state.columns)
  const tasks = useSelector(state => state.tasks)
  const tags = useSelector(state => state.tags)
  const [showModal, setShowModal] = useState(false)
  const [targetTask, setTargetTask] = useState({})
  const dispatch = useDispatch()

  const getTasksByStatus = (alias) => {
    return tasks.filter(task => task.status === alias)
  }

  const openModal = (task) => {
    setTargetTask(task)
    setShowModal(true)
  }

  return (
    <Fragment>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        {
          showModal &&
          <UiTaskForm
            task={targetTask}
            statuses={columns}
            tags={tags}
            onFormSubmit={() => setShowModal(false)}
          />
        }
      </Modal>
      <div className={styles.desk}>
        {columns.map((column, index) =>
          <KanbanCol
            key={index + column.alias}
            title={column.title}
            alias={column.alias}
            itemsAmount={getTasksByStatus(column.alias).length}
            onAdd={openModal}
          >
            {getTasksByStatus(column.alias).map((task) =>
              <KanbanItem
                key={task.id}
                task={task}
                onUpdate={openModal}
                onRemove={(id) => dispatch(removeTask(id))}
              />
            )}
          </KanbanCol>
        )}
      </div>
    </Fragment>
  )
}
