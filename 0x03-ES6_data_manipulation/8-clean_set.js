export default function cleanSet(set, startString) {
  const finalList = [];
  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      finalList.push(item.slice(startString.length));
    }
  }
  return finalList.join('-');
}
