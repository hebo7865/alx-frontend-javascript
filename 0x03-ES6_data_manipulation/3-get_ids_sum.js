export default function getStudentIdsSum(students) {
  return students.reduce((add, obj) => add + obj.id, 0);
}
