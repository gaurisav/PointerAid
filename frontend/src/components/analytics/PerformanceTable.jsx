import { useContext } from "react";
import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";

import { ForecastContext } from "../../context/ForecastContext";
import {
  marksToGrade,
  marksToGradePoint,
} from "../../utils/gradeCalculator";

function getStatus(gradePoint) {
  if (gradePoint >= 9)
    return {
      label: "Excellent",
      color: "success",
    };

  if (gradePoint >= 8)
    return {
      label: "Very Good",
      color: "primary",
    };

  if (gradePoint >= 7)
    return {
      label: "Good",
      color: "info",
    };

  if (gradePoint >= 6)
    return {
      label: "Average",
      color: "warning",
    };

  return {
    label: "Needs Improvement",
    color: "error",
  };
}

function PerformanceTable() {
  const { subjects } = useContext(ForecastContext);

  return (
    <Paper
      sx={{
        mt: 4,
        p: 3,
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
      >
        Subject Performance
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell>Credits</TableCell>
            <TableCell>Total Marks</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Grade Point</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subjects.map((subject, index) => {
            const marks = Number(subject.target) || 0;

            const grade = marksToGrade(marks);

            const gradePoint =
              marksToGradePoint(marks);

            const status =
              getStatus(gradePoint);

            return (
              <TableRow key={index}>
                <TableCell>
                  {subject.name || "-"}
                </TableCell>

                <TableCell>
                  {subject.credits || "-"}
                </TableCell>

                <TableCell>{marks}</TableCell>

                <TableCell>{grade}</TableCell>

                <TableCell>{gradePoint}</TableCell>

                <TableCell>
                  <Chip
                    label={status.label}
                    color={status.color}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default PerformanceTable;

