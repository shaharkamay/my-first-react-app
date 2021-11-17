import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <i className="fa fa-shopping-basket fa-6" aria-hidden="true">::before</i>
                <h1 className="App-title">Hello, Basket!</h1>
            </header>
        )
    }
}

export default Header;