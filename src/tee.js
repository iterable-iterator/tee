import {iter} from '@iterable-iterator/iter';
import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';

import {deque} from '@data-structure/deque';

/**
 * Returns <code>n</code> copies of the input iterable. Note that if the input
 * iterable is an iterator, then it must be discarded by the caller after
 * calling tee.
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {number} n - The number of copies to make.
 * @returns {IterableIterator[]}
 */
export default function tee(iterable, n) {
	const iterator = iter(iterable);

	const copies = [];

	while (n-- > 0) {
		copies.push(deque());
	}

	const gen = function* (mycopy) {
		while (true) {
			if (mycopy.length === 0) {
				const current = iterator.next();

				if (current.done) {
					return;
				}

				for (const copy of copies) {
					copy.append(current.value);
				}
			}

			yield mycopy.popleft();
		}
	};

	return list(map(gen, copies));
}
