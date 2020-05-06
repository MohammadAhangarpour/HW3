export function stringSlice(string, beginSlice = 0, endSlice = string.length) {
  let returnString = '';
  let newBeginSlice = parseInt(beginSlice);
  let newEndSlice = parseInt(endSlice);
  if (endSlice < 0) {
    newEndSlice = string.length + endSlice;
  }
  if (beginSlice < 0) {
    newBeginSlice = string.length + beginSlice;
  }
  for (let i = newBeginSlice; i < newEndSlice; i += 1) {
    returnString += string[i];
  }
  return returnString;
}
