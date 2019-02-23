import React, { Component } from 'react';
import Suggestion from './_blocks/suggestion'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './styles.scss';

class Suggestions extends Component {
    constructor(props) {
        super();
        this.state = {
            points: props.points
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            points: nextProps.points
        })
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                    <div ref={provided.innerRef} className="suggestions">
                        {
                            this.state.points.map((point, index) => (
                                <Draggable key={point.id} draggableId={point.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                        >
                                            <Suggestion text={point.text} id={point.id} />
                                        </div>
                                    )}
                                </Draggable>
                            ))
                        }
                    </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
    onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        const points = reorder(
            this.state.points,
            result.source.index,
            result.destination.index
        );

        this.setState({
            points
        });
    }
}

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    margin: `0 0 ${grid}px 0`,
    ...draggableStyle,
});

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export default Suggestions;
