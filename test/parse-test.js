import test from 'ava';
import { parseValue } from '../src/parse';

test('parseValue function exists', (t) => {
	t.is(typeof parseValue, 'function');
});

test('parseValue returns correct value', (t) => {
	t.is(parseValue('1 AUD in USD'), 1);
	t.is(parseValue('10 AUD in USD'), 10);
	t.is(parseValue('100 AUD in USD'), 100);
	t.is(parseValue('33.3333 AUD in USD'), 33.3333);
	t.is(parseValue('1,000 AUD in USD'), 1000);
	t.is(parseValue('1,234,567.890 AUD in USD'), 1234567.89);
	t.is(parseValue('AUD55 to USD'), 55);
	t.is(parseValue('55AUD to USD'), 55);
	t.is(parseValue('$55AU to USD'), 55);
});
