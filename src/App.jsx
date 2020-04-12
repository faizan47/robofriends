import React, { Component } from 'react';
import CardList from './Cardlist.jsx';
import Search from './Search.jsx';
import { robots } from './robots';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots,
			searchfield: ''
		};
	}
	onSearch = (e) => {
		this.setState({ searchfield: e.target.value });
	};
	render() {
		const results = this.state.robots.filter((robots) =>
			robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		);
		return (
			<div className="tc">
				<h1>Robots</h1>
				<Search onSearch={this.onSearch} />
				<CardList robots={results} />
			</div>
		);
	}
}

export default App;
