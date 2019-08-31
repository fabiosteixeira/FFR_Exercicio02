import React, { useState } from "react";
import { UsersTableComponent } from "../UsersTableComponent/UsersTableComponent";
import styled from '@emotion/styled'

export const Users = () => {

    const StLabel = styled.label`
            font-weight: 800;

        & input {
            margin-left: 20px;
        }
    `;

    const [users, setUsers] = useState([
        { id: 1, nome: "José Etevaldo", email: "etevaldo@gmail.com", idade: 37 },
        { id: 2, nome: "Xulambis Esteves", email: "xulambis@gmail.com", idade: 29 },
        { id: 3, nome: "Mariano Moraes", email: "mariano.moraes@gmail.com", idade: 33 }
    ])
    const [usersControl, setUsersControl] = useState(users);

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
        setUsersControl([...users])
    }

    const filterUsers = event => {
        setUsers(usersControl.filter(el => el.nome.toString().toLowerCase().indexOf(event.target.value.toString().toLowerCase()) > -1))
    }

    return (
        <>
            <h2 className="users__h2">Lista de usuários</h2>
            <StLabel>
                Filtrar usuários pelo nome:
                <input type="text" onChange={(e) => {
                    filterUsers(e)
                }} />
            </StLabel>
            <UsersTableComponent
                users={users}
                deleteUser={deleteUser}
            />
        </>
    )
}