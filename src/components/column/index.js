import React from 'react';
import styled from 'styled-components';

import Task from '../task';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px
`;
const TaskList = styled.div`
    padding: 8px
`;

export default (props) => {
    return (
        <Container>
            <Title>{props.column.title}</Title>
            {props.tasks.map(task => {
                <Task />
            })}
        </Container>
    );
};

