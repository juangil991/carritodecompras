import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import Phone from './Phone'
import { ItemTypes } from './Constants'
import DisplayPhone from './DisplayPhone'
import Phone from './Phone'


const ShoppingCartSpec = {
    drop() {
        return { name: 'ShoppingCart' }
    }
}

// DnD DropTarget - collect
let collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()

    };
}

class ShoppingCart extends Component {

    render() {
        return (
            <div className="shopping-cart" style={style} >
                {!inCart_phones.length &&
                    (isActive
                        ? 'Humm, phone!'
                        : 'Arrastrar aquí para ordenar')
                }
                {inCart_phones.length
                    ? <DisplayPhone displayPhones={inCart_phones} />
                    : null
                }
            </div>
        )
    }
} export default ShoppingCart;