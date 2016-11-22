import React, { PropTypes } from 'react';

const CurrencyListItem = ({ code, name }) => (
	<div>
		<strong>{ code }</strong>
		{ ': ' }
		<span>{ name }</span>
	</div>
);

CurrencyListItem.propTypes = {
	code: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default CurrencyListItem;
