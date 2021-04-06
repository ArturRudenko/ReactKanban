import React from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components'

const KanbanDesk = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Kanban () {
  const tasks = useSelector(state => state.tasks);
  
  return (
    <KanbanDesk>
      {tasks.map((task) =>
        <div key={task.id}>{task.title}</div>
      )}
    </KanbanDesk>
  )
}