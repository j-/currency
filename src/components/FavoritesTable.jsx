import React, { PropTypes } from 'react';

const buildHeader = (code) => (
	<th key={ code }>{ code }</th>
);

const buildHeadersTop = (codes) => (
	<tr>
		{ [
			<td key="blank" />,
			...codes.map((code) => buildHeader(code))
		] }
	</tr>
);

const buildCell = (fromCode, toCode, convert) => {
	const key = `${fromCode}-${toCode}`;
	const converted = convert(fromCode, toCode);
	let textContent;
	if (converted === null) {
		textContent = '?';
	} else {
		textContent = converted.toFixed(4);
	}
	return <td key={ key }>{ textContent }</td>;
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
