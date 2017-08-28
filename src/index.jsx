import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

class App extends Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div className="app">
				<h1>Todos</h1>
			</div>
		)
	}
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
