import React from "react";
import Item from "./Item";

class List extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>
                    {typeof this.props.items[0] === 'string' ? (this.props.items.map((item, i) => {
                        return <Item item={item} key={i} itemClick={() => this.props.itemClick(item)} />
                    })) : (this.props.items.map((obj, i) => {
                        return <Item item={obj.item} count={obj.count} key={i} itemClick={() => this.props.itemClick(obj.item)} />
                    })) }
                </ul>
            </div>
        )
    }
}

export default List;