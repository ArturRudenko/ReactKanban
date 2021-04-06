import { combineReducers } from 'redux';
import columns from './modules/columns';
import tasks from './modules/tasks';
import tags from './modules/tags';

export default combineReducers({
  columns,
  tasks,
  tags
});