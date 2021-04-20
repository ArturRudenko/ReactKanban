import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import KanbanCol from '../../components/KanbanCol';
import KanbanItem from '../../components/KanbanItem';

export default function Kanban () {
  const columns = useSelector(state => state.columns)
  const tasks = useSelector(state => state.tasks)

  const getTasksByStatus = (alias) => {
    return tasks.filter(task => task.status === alias)
  }

  return (
    <div className={styles.desk}>
      {columns.map((column, index) =>
        <KanbanCol
          key={index + column.alias}
          title={column.title}
          itemsAmount={getTasksByStatus(column.alias).length}
        >
          {getTasksByStatus(column.alias).map((task) =>
            <KanbanItem
              key={task.id}
              title={task.title}
              date={`${task.date.getDate()}.${task.date.getMonth()}.${task.date.getFullYear()}`}
              tags={task.tags}
            />
          )}
        </KanbanCol>
      )}
    </div>
  )
}
