export default function getListStudentsIds(object) {
  if (!Array.isArray(object)) {
    return [];
  }
  const obj = object.map((obj) => obj.id);
  return obj;
}
