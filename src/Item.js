import React from "react";

class Item extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li onClick={this.props.itemClick}>{(this.props.count ? this.props.count + ' ' : '') + this.props.item}</li>
        )
    }
}

export default Item;