import React from "react";
import data from "./../data";

export default function Item(props) {
    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row" width="25%">{props.item.nombre}</th>
                        <td width="25%"> {props.item.edad}</td>
                        <td width="25%">{props.item.carrera}</td>
                        <td width="25%">{props.item.hobbie}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}