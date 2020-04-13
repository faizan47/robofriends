import React, { Component } from 'react';
import CardList from '../Components/Cardlist.jsx';
import Search from '../Components/Search.jsx';
import Scroll from '../Components/Scroll.jsx';
import ErrorBoundry from '../Components/ErrorBoundry.jsx';
// import { robots } from './robots';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		};
	}
	onSearch = (e) => {
		this.setState({ searchfield: e.target.value });
	};
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}
	render() {
		const { robots, searchfield } = this.state;
		const results = robots.filter((robot) => robot.name.toLowerCase().includes(searchfield.toLowerCase()));
		return (
			<div className="tc">
				<h1>Robots</h1>
				<Search onSearch={this.onSearch} />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={results} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;
