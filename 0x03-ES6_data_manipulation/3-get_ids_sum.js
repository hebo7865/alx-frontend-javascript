export default function getStudentIdsSum(students) {
  return students.reduce((added, obj) => added + obj.id, 0);
}
