import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import Input from './input/input';
import List from './list/list';

class App extends Component {

	constructor() {
		super();
        this.state = {
            keyword : []
        }
	}
	storeKeyword(value){
	    let arr = this.state.keyword;
	    arr.push(value);
       this.setState({
           keyword : arr
       });
    }

	render() {
		return (
			<div className="app">
				<h1>Todos</h1>
                <Input onChange={ this.storeKeyword.bind(this)} />
                <List keyword={this.state.keyword}/>
			</div>
		)
	}
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
