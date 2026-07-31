export function calculateRequiredSGPA(student) {
  const currentCGPA = Number(student.currentCGPA);
  const targetCGPA = Number(student.targetCGPA);
  const completedCredits = Number(student.completedCredits);
  const semesterCredits = Number(student.currentSemesterCredits);

  if (
    !currentCGPA ||
    !targetCGPA ||
    !completedCredits ||
    !semesterCredits
  ) {
    return null;
  }

  const totalCredits = completedCredits + semesterCredits;

  const requiredSGPA =
    (
      targetCGPA * totalCredits -
      currentCGPA * completedCredits
    ) / semesterCredits;

  return requiredSGPA.toFixed(2);
}

