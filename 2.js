import { flat } from './flat.js';
import sort from './sort.js';

export default function flattenAndSort(...args) {
    return sort(flat(args, 1));
}