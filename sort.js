export default function sort(array) {
  const newArr = [...array];
  const { length } = newArr;
  for (let i = 1; i < length; i += 1) {
    const key = newArr[i];
    let j = i - 1;
    while (j >= 0 && newArr[j] > key) {
      newArr[j + 1] = newArr[j];
      j -= 1;
    }
    newArr[j + 1] = key;
  }
  return newArr;
}
