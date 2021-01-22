import React, { Component } from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import initialData from './initial-data';
import Column from '../../components/column';

const column = styled.div`
    width: 250px;
    padding: 16px;
    text-align: center;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    margin: 10px;
    box-sizing: border-box;
    cursor: pointer;
`

class BoxBuilder extends Component {
    state = initialData;

    // responsibilaty - synchronisly update state, to reflect drag and drop result.
    onDragEnd = result => {
        // TODO: reorder our column
    }

    render() {
        return this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />
        })
        
        // (
        //     <DragDropContext
        //         onDragEnd={this.onDragEnd}>
        //         <Droppable droppableId="products">
        //             {(pro) => (

        //             )}
        //         </Droppable>
        //     </DragDropContext>
        // );
    }
}

export default BoxBuilder;