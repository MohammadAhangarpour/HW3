import sort from './sort.js';

export function indexOf(array, target) {
    const sortedArray = sort(array);
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;
    while (startIndex <= endIndex) {
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (target === sortedArray[middleIndex]) return middleIndex;
        if (target > sortedArray[middleIndex]) startIndex = middleIndex + 1;
        else if (target < sortedArray[middleIndex]) endIndex = middleIndex - 1;
    }
    return -1;
}
export function findByItem(array, item) {
    return { index: indexOf(array, item), item };
}