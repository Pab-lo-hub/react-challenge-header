import React from "react";

export default function Card(props) {
    return (
        <div>
            {props.item.name}
            {props.item.edad}
            {props.item.carrera}
            {props.item.hobbie}
        </div>
    )
}