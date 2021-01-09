import React, { Component } from 'react';
import Board from 'react-trello';

import Product from './product';

const data = require('./data.json');

class BoxBuilder extends Component {
    state = {
        boardData: { lanes: [] },
        boardPrice: 0
    };

    setEventBus = (eventBus) => {
        this.setState({ eventBus });
    }

    async componentDidMount() {
        const response = await this.getBoard();
        this.setState({ boardData: response })
    }

    getBoard() {
        return new Promise((resolve) => resolve(data));
    }

    onDataChange = (newData) => {
        this.setState({
            boardData: newData,
            boardPrice: newData.lanes[1].cards.reduce((total, card) => total + card.price, 0)
        });
    }

    onCardMoveAcrossLanes = (fromLaneId, toLaneId, cardId, index) => {
        if(fromLaneId === 'products') {
            var card = this.state.boardData.lanes[1].cards.find(card => card.id === cardId)
            this.state.eventBus.publish({
                type: 'ADD_CARD', laneId: fromLaneId, card: card
            });
        }
        this.state.eventBus.publish({
            type: 'UPDATE_LANES', lanes: this.state.boardData.lanes.map((lane) => {
                return { ...lane, label: lane.id === 'cart' ? `${this.state.boardPrice} $` : lane.label }
            })
        })
    }

    render() {

        return (
            <Board
                data={this.state.boardData}
                eventBusHandle={this.setEventBus}
                onDataChange={this.onDataChange}
                onCardMoveAcrossLanes={this.onCardMoveAcrossLanes}
                components={{Card: Product}}
            />
        );
    }
}

export default BoxBuilder;