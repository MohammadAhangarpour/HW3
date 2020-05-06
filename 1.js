import splice from './splice.js';

export default function deleteByIndex(array, index) {
    splice(array, index, 1);
    return array;
}