import React, { Component, Fragment } from 'react';
import Card from './Card.jsx';
import { robots } from './robots';

class App extends Component {
	render() {
		return (
			<div className="tc">
				<h1>Robots</h1>
				<Card />
				<Card />
				<Card />
			</div>
		);
	}
}

export default App;
