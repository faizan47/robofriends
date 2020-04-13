import React from 'react';
import Card from './Card.jsx';

const CardList = ({ robots }) => {
	const robotsArray = robots.map((robot, i) => {
		const { email, name, id } = robot;
		return <Card key={i} id={id} name={name} email={email} />;
	});
	return robotsArray;
};
export default CardList;
