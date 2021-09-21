import {iter} from '@iterable-iterator/iter';

import _tee from './_tee.js';

/**
 * Returns <code>n</code> copies of the input iterable. Note that if the input
 * iterable is an iterator, then it must be discarded by the caller after
 * calling tee.
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {number} n - The number of copies to make.
 * @returns {IterableIterator<IterableIterator>}
 */
const tee = (iterable, n) => _tee(iter(iterable), n);

export default tee;
