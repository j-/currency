import test from 'ava';
import { parseValue } from '../src/parse';

test('parseValue function exists', (t) => {
	t.is(typeof parseValue, 'function');
});

test('parseValue returns correct value', (t) => {
	t.is(parseValue('100 AUD in USD'), 100);
});
