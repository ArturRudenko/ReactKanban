import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setColumns, setTasks, setTags } from './actions';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { columns, tasks, tags } from './utils/baseData';
import Header from './components/Header/';
import Kanban from './views/Kanban/';
import Tags from './views/Tags/';
import Tag from './views/Tag/';

export default function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setColumns(columns))
    dispatch(setTasks(tasks))
    dispatch(setTags(tags))
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Kanban} />
          <Route exact path='/tags' component={Tags} />
          <Route path='/tags/:id' component={Tag} />
        </Switch>
      </Router>
  </Fragment>
  )
}
