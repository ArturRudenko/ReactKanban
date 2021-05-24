import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask, updateTaskContent } from '../../../actions';
import styles from './styles.module.scss'
import UiTextField from '../UiTextField'
import UiSelect from '../UiSelect';
import UiMultiTagSelect from '../UiMultiTagSelect';
import UiBtn from '../UiBtn';

export default function UiTaskForm ({ task, statuses, tags, onFormSubmit }) {
  const [taskTitle, setTaskTitle] = useState(task && task.title ? task.title : '')
  const [taskText, setTaskText] = useState(task && task.text ? task.text : '')
  const [taskStatus, setTaskStatus] = useState(task && task.status ? task.status : statuses[0].alias)
  const [taskTags, setTaskTags] = useState(task && task.tags ? task.tags : [])
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    if (!taskTitle) return
    if (task && task.id) {
      dispatch(updateTaskContent({
        id: task.id,
        title: taskTitle,
        text: taskText,
        status: taskStatus,
        tags: taskTags
      }))
    } else {
      dispatch(addTask({
        title: taskTitle,
        text: taskText,
        status: taskStatus,
        tags: taskTags
      }))
    }
    onFormSubmit()
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
        style={{textAlign: 'center'}}
      >
        <div className={styles.formFieldWrapper}>
          <UiTextField
            defaultValue={taskTitle}
            placeholder={'Title'}
            onValueChange={(value) => setTaskTitle(value)}
          />
        </div>
        <div className={styles.formFieldWrapper}>
          <UiTextField
            defaultValue={taskText}
            placeholder={'Description'}
            textarea={true}
            onValueChange={(value) => setTaskText(value)}
          />
        </div>
        <div className={styles.formFieldWrapper}>
          <UiSelect
            defaultValue={taskStatus}
            options={statuses}
            onStatusChange={(status) => setTaskStatus(status)}
          />
        </div>
        <div className={styles.formFieldWrapper}>
          <UiMultiTagSelect
            defaultSelectedTags={taskTags}
            allTags={tags}
            onSelect={(tgs) => setTaskTags(tgs)}
          />
        </div>
        <UiBtn>Confirm</UiBtn>
      </form>
    </div>
  )
}
