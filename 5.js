import splice from './splice.js';
import { indexOf } from './search.js';

export default function replaceByItem(array, currentItem, newItem) {
    splice(array, indexOf(array, currentItem), 1, newItem);
    return array;
}