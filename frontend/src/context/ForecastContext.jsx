import { createContext, useState } from "react";

export const ForecastContext = createContext();

export function ForecastProvider({ children }) {
  const [student, setStudent] = useState({
    currentCGPA: 8.42,
    targetCGPA: 9.0,
    completedCredits: 92,
    semesterCredits: 24,
  });

  const [subjects, setSubjects] = useState([]);

  return (
    <ForecastContext.Provider
      value={{
        student,
        setStudent,
        subjects,
        setSubjects,
      }}
    >
      {children}
    </ForecastContext.Provider>
  );
}

