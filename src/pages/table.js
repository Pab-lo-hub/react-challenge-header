import React from "react";
import data from "./../data";
import Item from "./../components/item"

export default function Table(props) {
    const items = data.map(item => {
        return (
            <Item
                key={item.nombre}
                item={item}
            />
        )
    })
    return (
        <div>
            <h1>TABLE</h1>
            {items}
        </div >
    )
}