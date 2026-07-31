import { useState } from "react";

import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Stack,
  Grid,
  TextField,
} from "@mui/material";

import SubjectRow from "./SubjectRow";

import { calculateRequiredSGPA } from "../../utils/cgpaCalculator";

function ForecastForm() {
  const [student, setStudent] = useState({
    currentCGPA: "",
    targetCGPA: "",
    completedCredits: "",
    currentSemesterCredits: "",
  });

  const [subjects, setSubjects] = useState([
    {
      name: "",
      credits: "",
      current: "",
      target: "",
    },
  ]);

  const handleSubjectChange = (index, field, value) => {
    setSubjects((prev) =>
      prev.map((subject, i) =>
        i === index ? { ...subject, [field]: value } : subject
      )
    );
  };

  const handleAddSubject = () => {
    setSubjects((prev) => [
      ...prev,
      {
        name: "",
        credits: "",
        current: "",
        target: "",
      },
    ]);
  };

  const handleDeleteSubject = (index) => {
    setSubjects((prev) => prev.filter((_, i) => i !== index));
  };

  const requiredSGPA = calculateRequiredSGPA(student);

  const predictedSGPA =
    subjects.length > 0
      ? (
          subjects.reduce(
            (acc, subject) =>
              acc + (Number(subject.current) || 0),
            0
          ) / subjects.length
        ).toFixed(2)
      : "--";

  return (
    <Stack spacing={3}>
      <Typography variant="h5" fontWeight={700}>
        Can I still reach my target CGPA?
      </Typography>

      {/* Step 1: Student Details */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Current CGPA"
            value={student.currentCGPA}
            onChange={(e) =>
              setStudent({
                ...student,
                currentCGPA: e.target.value,
              })
            }
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Target CGPA"
            value={student.targetCGPA}
            onChange={(e) =>
              setStudent({
                ...student,
                targetCGPA: e.target.value,
              })
            }
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Completed Credits"
            value={student.completedCredits}
            onChange={(e) =>
              setStudent({
                ...student,
                completedCredits: e.target.value,
              })
            }
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Semester Credits"
            value={student.currentSemesterCredits}
            onChange={(e) =>
              setStudent({
                ...student,
                currentSemesterCredits: e.target.value,
              })
            }
          />
        </Grid>
      </Grid>

      {/* Subjects Table */}
      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Subject Marks
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Subject</TableCell>
              <TableCell>Credits</TableCell>
              <TableCell>Current Marks</TableCell>
              <TableCell>Target Marks</TableCell>
              <TableCell>Required Final</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {subjects.map((subject, index) => (
              <SubjectRow
                key={index}
                subject={subject}
                index={index}
                onChange={handleSubjectChange}
                onDelete={handleDeleteSubject}
              />
            ))}
          </TableBody>
        </Table>

        <Button
          variant="outlined"
          onClick={handleAddSubject}
          sx={{ mt: 2 }}
        >
          + Add Subject
        </Button>
      </Paper>

      {/* Predicted SGPA */}
      <Paper
        elevation={2}
        sx={{
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6">
          Predicted SGPA
        </Typography>

        <Typography
          variant="h3"
          color="primary"
          fontWeight="bold"
        >
          {predictedSGPA}
        </Typography>
      </Paper>

      {/* Required SGPA */}
      <Paper
        elevation={2}
        sx={{
          mt: 3,
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6">
          Required SGPA
        </Typography>

        <Typography
          variant="h3"
          color="success.main"
          fontWeight="bold"
        >
          {requiredSGPA ?? "--"}
        </Typography>

        {requiredSGPA && (
          <Typography sx={{ mt: 1 }}>
            {requiredSGPA <= 10
              ? "🎉 Your target CGPA is achievable."
              : "⚠️ Target exceeds the maximum SGPA (10). Consider revising your goal."}
          </Typography>
        )}
      </Paper>
    </Stack>
  );
}

export default ForecastForm;

