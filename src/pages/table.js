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
            <table class="table">
                <thead>
                    <tr>
                        <th width="25%">Nombre</th>
                        <th width="25%">Edad</th>
                        <th width="25%">Carrera</th>
                        <th width="25%">Hobbie</th>
                    </tr>
                </thead>
            </table>
            {items}
        </div >
    )
}