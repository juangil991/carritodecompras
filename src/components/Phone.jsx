import React, { Component } from 'react'
import { DragSource } from 'react-dnd';
import { ItemTypes } from './Constants';
import { connect } from 'react-redux'
import { ItemTypes } from './Constants';
import { moveIncart } from '../actions/phones'// phone DnD spec

// phone DnD spec
const phoneSpec = {
    beginDrag(props) {
        console.log("begin drag")
        return {
            name: props.brand
        }
    },
    endDrag(props, monitor, component) {
        if (monitor.didDrop()) {
            const dragItem = monitor.getItem(); // from beginDrag
            const dropResult = monitor.getDropResult();
            // Move action goes here
            props.dispatch(moveIncart(dragItem.id))
            console.log("You dropped ", dragItem.name, ' into ' + dropResult.name)
        } else {
            return;
        }
    }
}
// phone DragSource collect
let collect = ( connect, monitor ) =>{
    return{
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
    }
    }

class Phone extends Component {
    render() {
        const { name } = this.props;
        return (
            <div class="ui card phone">
                <div class="image"><img src="/images/phone.jpg" />
                </div>
                <div class="content">
                    <div class="phone-name">{name}</div>
                    <div class="meta">8G RAM, 16G memory</div>
                </div>
                <div class="extra content">
                    <a>
                        <i aria-hidden="true" class="money icon"></i>
                        $ 80
                    </a>
                </div>
            </div>
        )
    }
} export default Phone