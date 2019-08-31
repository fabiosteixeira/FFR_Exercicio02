import React from 'react';
import { UsersItemComponent } from '../UsersItemComponent/UsersItemComponent';
import styled from '@emotion/styled'

export const UsersTableComponent = (props) => {

    const Table = styled.table`
            margin-top: 20px;            

        & .table_title {
            font-weight: 600;
        }

        & td {
            border-style: solid;
            border-width: thin;
        }
    `;

    return (
        <Table>
            <tbody>
                <tr className="table_title">
                    <td>Nome</td>
                    <td>Email</td>
                    <td>Idade</td>
                    <td></td>
                    <td></td>
                </tr>
                {props.users.map((user, i) =>
                    <tr key={i}>
                        <UsersItemComponent
                            user={user}
                            deleteUser={props.deleteUser}
                        />
                    </tr>
                )}
            </tbody>
        </Table>
    )
}