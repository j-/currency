export const parseValue = (sentence) => {
	return Number(
		(sentence.match(/(\d|\.)/g, '') || []).join('')
	);
};

export const parse = (sentence) => {
	const value = parseValue(sentence);
	return { value };
};
