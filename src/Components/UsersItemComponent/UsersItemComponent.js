import React from 'react';

export const UsersItemComponent = (props) => {
    return (
        <>
            <td>
                {props.user.nome}
            </td>
            <td>
                {props.user.email}
            </td>
            <td>
                {props.user.idade}
            </td>
            <td>
                <button>
                    <a href={"user/" + props.user.nome}>
                        Visualizar
                    </a>
                </button>
            </td>
            <td>
                <button
                    onClick={() => props.deleteUser(props.user.id)}
                    className="button muted-button"
                >
                    Delete
                </button>
            </td>
        </>
    )
}