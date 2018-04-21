import React,{ Component }from 'react';
import todos from '../todos';
import Item from '../item/item';

import './list.css';

class List extends Component{
    render(){
        const keywords = this.props.keyword;
        // let arrs = todos.filter((item,index) => item.includes(keyword));
        return(
            <ul className="list">
                {   //并没有map()结束后的分号;
                    keywords.map((item,index) => {
                        return (<Item item={item} key={index}/>);
                    })
                }
            </ul>
        );
    }
}
export default List;
