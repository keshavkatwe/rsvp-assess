function calculateAge(selectedDate: string) {
  return Math.floor(
    (new Date().getTime() - new Date(selectedDate).getTime()) / 3.15576e10
  );
}
export default calculateAge;
