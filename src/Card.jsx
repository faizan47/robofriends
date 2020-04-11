import React, { Component } from 'react';
import { robots } from './robots';

// const Card = () => {
// 	return <h1>Hello World!</h1>;
// };
const { name, email, id } = robots;

class Card extends Component {
	render() {
		return (
			<div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
				<img alt="robots" src={`https://robohash.org/${id}?200x200`} />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		);
	}
}

export default Card;
