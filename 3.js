import { concat, push } from './push.js';

export function flat(array, depth) {
    const result = [];

    for (let i = 0; i < array.length; i += 1) {
        const value = array[i];
        if (
            depth > 0 &&
            Object.prototype.toString.call(value) === '[object Array]'
        ) {
            concat(result, flat(value, depth - 1));
        } else {
            push(result, value);
        }
    }

    return result;
}

export function flattenDeep(array) {
    const length = array === null ? 0 : array.length;
    return length ? flat(array, Number.POSITIVE_INFINITY) : [];
}