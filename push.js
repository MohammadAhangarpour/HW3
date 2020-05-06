export function push(array, value) {
  array[array.length] = value;
}

export function concat(array, values) {
  const offset = array.length;

  values.forEach((value, index) => {
    array[offset + index] = value;
  });
  return array;
}
