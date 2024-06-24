export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  const array = [];
  for (const employee of employees) {
    for (const name of employee) {
      array.push(name);
    }
  }
  return array;
}
