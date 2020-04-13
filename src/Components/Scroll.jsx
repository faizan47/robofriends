import React from 'react';

const Scroll = (props) => {
	return <div style={{ overflow: 'scroll', maxHeight: '800px' }}>{props.children}</div>;
};

export default Scroll;
