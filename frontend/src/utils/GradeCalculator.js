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

