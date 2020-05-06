import { push } from './push.js';

export default function splice(array, start, deleteCount, ...toAdd) {
  const result = [];
  const removed = [];
  const arrLen = array.length;
  let numStart = parseInt(start);
  let numDeleteCount = parseInt(deleteCount);

  if (numStart < 0) {
    numStart = arrLen + numStart;
    numStart = numStart > 0 ? numStart : 0;
  } else {
    numStart = numStart < arrLen ? numStart : arrLen;
  }

  if (numDeleteCount < 0) numDeleteCount = 0;

  if (numDeleteCount > arrLen - numStart) {
    numDeleteCount = arrLen - numStart;
  }

  for (let i = 0; i < numStart; i += 1) {
    result[i] = array[i];
  }

  for (let i = 0; i < toAdd.length; i += 1) {
    push(result, toAdd[i]);
  }

  for (let i = numStart; i < numStart + numDeleteCount; i += 1) {
    push(removed, array[i]);
  }

  for (let i = numStart + (numDeleteCount || 0); i < arrLen; i += 1) {
    push(result, array[i]);
  }

  array.length = 0;
  for (let i = 0; i < result.length; i += 1) {
    array[i] = result[i];
  }

  return removed;
}
