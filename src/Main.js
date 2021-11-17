import React from "react";
import List from "./List";

class Main extends React.Component {
    constructor() {
        super()
        this.state = { groceriesItems: ['Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple', 'Carrot', 'Celery', 'Mushroom', 'Green', 'Pepper', 'Eggs', 'Cheese', 'Butter', 'Chicken', 'Beef', 'Pork', 'Fish', 'Rice', 'Pasta', 'Bread'], basketItems: [] }
    }

    groceryItemClick = (item) => {
        const basketItems = [...this.state.basketItems];
        let obj = basketItems.find(obj => obj.item === item);
        if(obj) {
            obj.count++;
            this.setState({ basketItems });
        } 
        else {
            obj = { item, count: 1 }
            basketItems.push(obj);
            this.setState({ basketItems });
        }
    }

    basketItemClick = (item) => {
        const basketItems = this.state.basketItems.filter(obj => obj.item !== item);
        this.setState({ basketItems });
        // if(obj) 
    }




    render() {
        return (
            <main>
                <List title="Groceries" items={this.state.groceriesItems} itemClick={this.groceryItemClick} />
                {/* <List title="Basket" items={this.state.basketItems.map((obj) => {
                    return `${obj.count || ''} ${obj.item}`;
                })} */}
                <List title="Basket" items={this.state.basketItems} itemClick={this.basketItemClick} />
            </main>
        )
    }
}

export default Main;