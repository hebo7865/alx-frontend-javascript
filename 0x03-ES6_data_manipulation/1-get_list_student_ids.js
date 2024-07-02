export default function getListStudentIds(object) {
  if (!Array.isArray(object)) {
    return [];
  }
  const newobj = object.map((obj) => obj.id);
  return newobj;
}
