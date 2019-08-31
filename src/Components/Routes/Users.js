import React, { useState } from "react";
import { UsersTableComponent } from "../UsersTableComponent/UsersTableComponent";

export const Users = () => {

    const [users, setUsers] = useState([
        { id: 1, nome: "Carinha 1", email: "carinha1@gmail.com", idade: 37 },
        { id: 2, nome: "Carinha 2", email: "carinha2@gmail.com", idade: 29 },
        { id: 3, nome: "Carinha 3", email: "carinha3@gmail.com", idade: 33 }
    ])

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
        <>
            <h2 className="users__h2">Lista de usuários</h2>
            <UsersTableComponent
                users={users}
                deleteUser={deleteUser}
            />
        </>
    )
}