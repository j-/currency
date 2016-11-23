import React, { PropTypes } from 'react';

const buildHeader = (code) => (
	<th key={ code }>{ code }</th>
);

const buildHeadersTop = (codes) => (
	<tr>
		{ [
			<td key="blank" className="favorites-table--blank" />,
			...codes.map((code) => buildHeader(code))
		] }
	</tr>
);

const buildCell = (fromCode, toCode, convert) => {
	const isEqual = fromCode === toCode;
	const className = isEqual ? 'favorites-table--equal' : '';
	const key = `${fromCode}-${toCode}`;
	const converted = convert(fromCode, toCode);
	let value, textContent, title;
	if (converted === null) {
		textContent = '?';
		title = 'Conversion is unknown';
	} else {
		value = converted.toFixed(4);
		textContent = value;
		if (!isEqual) {
			title = `1.0000 ${fromCode} = ${value} ${toCode}`;
		}
	}
	return (
		<td
			key={ key }
			className={ className }
			title={ title }
		>
			{ textContent }
		</td>
	);
};

const buildRow = (fromCode, codes, convert) => (
	<tr key={ fromCode }>
		{ [
			buildHeader(fromCode),
			...codes.map((toCode) => buildCell(fromCode, toCode, convert))
		] }
	</tr>
);

const buildRows = (codes, convert) => (
	codes.map((code) => buildRow(code, codes, convert))
);

const FavoritesTable = ({ codes, convert, ...props }) => {
	return (
		<table className="favorites-table">
			<thead>
				{ buildHeadersTop(codes) }
			</thead>
			<tbody>
				{ buildRows(codes, convert) }
			</tbody>
		</table>
	);
};

FavoritesTable.propTypes = {
	codes: PropTypes.arrayOf(PropTypes.string).isRequired,
	convert: PropTypes.func.isRequired,
};

export default FavoritesTable;
