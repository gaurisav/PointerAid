import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ForecastContext = createContext();

export function ForecastProvider({ children }) {
  const [student, setStudent] = useLocalStorage("student", {
    currentCGPA: 8.42,
    targetCGPA: 9,
    completedCredits: 92,
    semesterCredits: 24,
  });

  const [subjects, setSubjects] = useLocalStorage("subjects", []);

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

