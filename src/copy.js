import assert from 'assert';

import {
	Node,
	_value,
	_setValue,
	_isLast,
	_shift,
	_setNext,
	single,
} from '@data-structure-algebra/singly-linked-list';

/**
 * Create a copy of an input iterator given a buffer cursor.
 *
 * @param {Iterator} iterator Input iterator.
 * @param {Node} cursor Buffer cursor.
 * @return {IterableIterator}
 */
const copy = (iterator, cursor) => {
	assert(cursor instanceof Node);

	return {
		[Symbol.iterator]() {
			return this;
		},
		next() {
			if (_isLast(cursor)) {
				assert(_value(cursor) === null);
				_setValue(cursor, iterator.next());
				_setNext(cursor, _value(cursor).done ? cursor : single(null));
			}

			assert(!_isLast(cursor));

			const returnValue = _value(cursor);

			cursor = _shift(cursor);

			return returnValue;
		},
	};
};

export default copy;
