import React, { PropTypes } from 'react';

const Conversion = ({
	fromCode,
	toCode,
	value,
	service,
	converted,
}) => (
	<div>
		<strong>{ service }</strong><br />
		<input type="text" readOnly value={ fromCode } /><br />
		<input type="number" readOnly value={ value } /><br />
		<input type="text" readOnly value={ toCode } /><br />
		<input type="number" readOnly value={ converted || '' } /><br />
	</div>
);

Conversion.propTypes = {
	fromCode: PropTypes.string.isRequired,
	toCode: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	converted: PropTypes.number,
};

export default Conversion;
