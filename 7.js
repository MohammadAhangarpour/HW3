import { indexOf } from './search.js';
import { push } from './push.js';

export default function uniqueArray(array) {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
        const item = array[i];
        if (indexOf(result, item) === -1) push(result, item);
    }
    return result;
}