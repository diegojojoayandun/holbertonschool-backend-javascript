export default function getStudentsByLocation(arr, City) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter((city) => city.location === City);
}
