import test from 'ava';

import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';
import {count} from '@iterable-iterator/count';
import {range} from '@iterable-iterator/range';
import {head} from '@iterable-iterator/slice';
import {tee} from '../../src/index.js';

const repr = (x) => JSON.stringify(x);

const finite = (t, iterable, n, expected) => {
	t.deepEqual(list(map(list, tee(iterable, n))), expected);
};

finite.title = (title, iterable, n, expected) =>
	title ?? `tee(${repr(iterable)}, ${n}) is ${repr(expected)}`;

test(finite, [], 0, []);
test(finite, [], 1, [[]]);
test(finite, [], 2, [[], []]);
test(finite, [0], 0, []);
test(finite, [0], 1, [[0]]);
test(finite, [0], 2, [[0], [0]]);
test(finite, [5, 7], 0, []);
test(finite, [5, 7], 1, [[5, 7]]);
test(finite, [5, 7], 2, [
	[5, 7],
	[5, 7],
]);

test('tee of infinite sequence', (t) => {
	for (const it of tee(count(), 10)) {
		t.deepEqual(list(head(it, 1000)), list(range(1000)));
		t.deepEqual(list(head(it, 100)), list(range(1000, 1100)));
	}
});
