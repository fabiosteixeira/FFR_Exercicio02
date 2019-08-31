import React from 'react';
import { UsersItemComponent } from '../UsersItemComponent/UsersItemComponent';

export const UsersTableComponent = (props) => {
    return (
        <table>
            <tbody>
                {props.users.map((user, i) =>
                    <tr key={i}>
                        <UsersItemComponent
                            user={user}
                            deleteUser={props.deleteUser}
                        />
                    </tr>
                )}
            </tbody>
        </table>
    )
}