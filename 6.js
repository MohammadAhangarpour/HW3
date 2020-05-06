import { push } from './push.js';
import { stringSlice } from './slice.js';

export default function numbersInString(string) {
    const result = [];
    const map = [];
    for (let i = 0; i < string.length; i += 1) {
        const char = string[i];
        if (char >= '0' && char <= '9') {
            if (!map[map.length - 1] || map[map.length - 1].end) {
                map[map.length] = { start: i };
            }
        } else if (map[map.length - 1] && !map[map.length - 1].end) {
            map[map.length - 1].end = i;
        }
    }
    for (let i = 0; i < map.length; i += 1) {
        const mapItem = map[i];
        push(result, +stringSlice(string, mapItem.start, mapItem.end));
    }
    return result;
}