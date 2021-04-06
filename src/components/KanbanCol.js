import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 31.5%;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

export default function KanbanCol () {
  return (
    <Wrapper>
      <div>
        <Title>{title}</Title>
        { !itemsAmount && <p>No tasks in such satus</p> }
      </div>
      <div>
        {this.props.children}
      </div>
    </Wrapper>
  )
}