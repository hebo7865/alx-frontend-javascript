export default function iterateThroughObject(reportWithIterator) {
  const employees = Object.values(reportWithIterator);
  const array = [];
  for (const employee of employees) {
    array.push(employee);
  }
  const result = array.join(' | ');
  return result;
}
