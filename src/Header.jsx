import React from 'react';
import Button from './Button'

function Header () {
    return (
        <header className="header">
            <div className="container">
            <div className="header__logo">
                <img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
                <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
            <div className="header__cart">
                <Button extraClass='button--cart'/>
            </div>
            </div>
      </header>
    )
}

export default Header 