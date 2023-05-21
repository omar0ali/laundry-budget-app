import React from 'react';

export default function TitleAndText({ name, id }) {
    return (
        <>
            <td>{name}</td>
            <td><input id={id} type="text"></input></td>
        </>
    )
}
