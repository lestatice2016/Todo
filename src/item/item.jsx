import React,{ Component }from 'react';
import './item.css';

class Item extends Component{
    constructor(){
        super();
        this.state = {
            isSelected : false
        }
    }
    handleClick(){
        this.setState({
            isSelected : !this.state.isSelected
        });
    }
    render(){
        const item = this.props.item;
        let name = this.state.isSelected ? ' item-selected':'';
        return (
            <li className={"item" + name}>
                <input className="item-cb" type="checkbox" onClick={this.handleClick.bind(this)}/>
                <span  className="item-text">{item}</span>
            </li>
        );
    }
}

export default Item;
