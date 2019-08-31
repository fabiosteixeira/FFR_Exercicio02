import React from 'react';
import "./NavBarComponent.css"

export const NavBarComponent = () => (
    <div className="navBar">
        <div className="navBar__box">
            <a href="/" className="navBar__box__navItem">Início</a>
            <a href="/users" className="navBar__box__navItem">Usuários</a>
        </div>
    </div>
)