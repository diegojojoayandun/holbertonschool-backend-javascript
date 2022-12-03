export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (let item of array) {
    item = appendString + item;
    res.push(item);
  }

  return res;
}
