import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../../actions';
import styles from './styles.module.scss';
import KanbanCol from '../../components/KanbanCol';
import KanbanItem from '../../components/KanbanItem';
import Modal from '../../components/Modal';
import UiTaskForm from '../../components/UI/UiTaskForm';
import UiMultiTagSelect from '../../components/UI/UiMultiTagSelect';

export default function Kanban () {
  const columns = useSelector(state => state.columns)
  const tasks = useSelector(state => state.tasks)
  const tags = useSelector(state => state.tags)
  const [showModal, setShowModal] = useState(false)
  const [targetTask, setTargetTask] = useState({})
  const [targetTags, setTargetTags] = useState([])
  const dispatch = useDispatch()

  const getFilteredTasks = () => {
    if (targetTags.length < 1) return tasks

    return tasks.filter(task => {
      for(let tag of targetTags) {
        if(!task.tags.find(curTag => curTag.id === tag.id)) return false
      }
      return true
    })
  }

  const getTasksByStatus = (alias) => {
    return getFilteredTasks().filter(task => task.status === alias)
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
      <div className={styles.selectWrapper}>
        <UiMultiTagSelect
          defaultSelectedTags={targetTags}
          allTags={tags}
          onSelect={(tags) => setTargetTags(tags)}
        />
      </div>
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
