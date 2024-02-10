import {single} from '@data-structure-algebra/singly-linked-list';
import {nrepeat, repeat} from '@iterable-iterator/repeat';

import copy from './copy.js';
import myMap from './myMap.js';

/**
 * Returns <code>n</code> copies of the input iterator. Note that if the input
 * iterator is an iterator, then it must be discarded by the caller after
 * calling tee.
 *
 * TODO allow n = +Infinity?
 *
 * @param {Iterator} iterator - The input iterator.
 * @param {number} n - The number of copies to make.
 * @returns {IterableIterator<IterableIterator>}
 */
const tee = (iterator, n) =>
	myMap(copy, nrepeat(iterator, n), repeat(single(null)));

export default tee;
