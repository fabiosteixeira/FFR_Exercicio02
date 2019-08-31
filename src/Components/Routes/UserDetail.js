import React from 'react';

export const UserDetail = (props) => (
    <div>
        O usuário selecionado é o {props.match.params.name}. 
    </div>
)