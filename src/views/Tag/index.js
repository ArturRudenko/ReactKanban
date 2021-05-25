import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.scss'
import UiTextField from '../../components/UI/UiTextField';
import UiBtn from '../../components/UI/UiBtn';
import { updateTagContent } from '../../actions';

export default function Tag ({ match }) {
  const tags = useSelector(state => state.tags)
  const [tagTitle, setTagTitle] = useState('')
  const [tagDescription, setTagDescription] = useState('')
  const [tagColor, setTagColor] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const tag = tags.find(tag => tag.id === match.params.id)

    setTagTitle(tag.title)
    setTagDescription(tag.description)
    setTagColor(tag.color)
  }, [match, tags])

  const onSubmit = (e) => {
    e.preventDefault()
    if (tagTitle) {
      dispatch(updateTagContent({
        id: match.params.id,
        title: tagTitle,
        description: tagDescription,
        color: tagColor
      }))
    }
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  return (
    <div className={styles.tagPage}>
      <form
        className={styles.tagForm}
        onSubmit={onSubmit}
      >
        <div className={styles.formFieldWrapper}>
          <UiTextField
            defaultValue={tagTitle}
            onValueChange={(value) => setTagTitle(value)}
          />
        </div>
        <div className={styles.formFieldWrapper}>
          <UiTextField
            defaultValue={tagDescription}
            textarea={true}
            areaHeight={'100px'}
            placeholder={'Description'}
            onValueChange={(value) => setTagDescription(value)}
          />
        </div>
        <div className={styles.formFieldWrapper}>
          <div className={styles.colorPicker}>
            <span className={styles.colorPickerTitle}>Pick a color: </span>
            <input
              type="color"
              value={tagColor}
              className={styles.colorPickerInput}
              onChange={({ target: { value } }) => setTagColor(value)}
            />
          </div>
        </div>
        <div>
          <UiBtn>Confirm</UiBtn>
          {
            showMessage &&
            <span style={{marginLeft: '20px', color: '#848482'}}>Done</span>
          }
        </div>
      </form>
    </div>
  )
};