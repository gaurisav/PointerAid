export function calculateSGPA(subjects) {
  if (!subjects || subjects.length === 0) {
    return null;
  }

  const totalCredits = subjects.reduce(
    (acc, subject) => acc + (Number(subject.credits) || 0),
    0
  );

  const totalPoints = subjects.reduce((acc, subject) => {
    const gradePoint = Math.min(
      Math.max((Number(subject.current) || 0) / 10, 0),
      10
    );
    return acc + gradePoint * (Number(subject.credits) || 0);
  }, 0);

  if (totalCredits === 0) {
    return null;
  }

  return (totalPoints / totalCredits).toFixed(2);
}

export function marksToGrade(marks) {
  if (marks >= 90) return "O";
  if (marks >= 80) return "A+";
  if (marks >= 70) return "A";
  if (marks >= 60) return "B+";
  if (marks >= 50) return "B";
  if (marks >= 45) return "C";
  if (marks >= 40) return "P";
  return "F";
}

export function marksToGradePoint(marks) {
  if (marks >= 90) return 10;
  if (marks >= 80) return 9;
  if (marks >= 70) return 8;
  if (marks >= 60) return 7;
  if (marks >= 50) return 6;
  if (marks >= 45) return 5;
  if (marks >= 40) return 4;
  return 0;
}
