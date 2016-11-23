import React, { PropTypes } from 'react';

import {
	Form,
	FormField,
	FormInput,
} from 'elemental';

const cancel = (e) => e.preventDefault();

const Conversion = ({
	fromCode,
	toCode,
	value,
	service,
	converted,
}) => (
	<Form type="horizontal" onSubmit={ cancel }>
		<FormField label="Service">
			{ service }
		</FormField>
		<FormField label="From">
			<FormInput type="text" placeholder="USD" value={ fromCode } readOnly />
		</FormField>
		<FormField label="Value">
			<FormInput type="number" placeholder="1.00" value={ value } readOnly />
		</FormField>
		<FormField label="To">
			<FormInput type="text" placeholder="AUD" value={ toCode } readOnly />
		</FormField>
		<FormField label="Value">
			<FormInput type="number" placeholder="1.00" value={ converted || '' } readOnly />
		</FormField>
	</Form>
);

Conversion.propTypes = {
	fromCode: PropTypes.string.isRequired,
	toCode: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	converted: PropTypes.number,
};

export default Conversion;
