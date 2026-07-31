import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useContext } from "react";
import { ForecastContext } from "../../context/ForecastContext";

function PerformanceTable() {
  const { subjects } = useContext(ForecastContext);

  const rows = (subjects || []).map((subject) => {
    const current = Number(subject.current) || 0;
    const target = Number(subject.target) || 0;
    const credits = Number(subject.credits) || 0;
    const requiredFinal = target - current;

    let status = "-";
    let statusColor = "text.secondary";

    if (current && target) {
      if (requiredFinal > 60) {
        status = "Impossible";
        statusColor = "error";
      } else if (requiredFinal <= 0) {
        status = "Achieved";
        statusColor = "success.main";
      } else {
        status = `${requiredFinal} / 60`;
        statusColor = "primary";
      }
    }

    return {
      name: subject.name || "Untitled",
      credits,
      current,
      target,
      status,
      statusColor,
    };
  });

  const hasData = rows.length > 0;

  return (
    <Paper sx={{ p: 3, mt: 4, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        Subject Performance
      </Typography>

      {hasData ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Subject</TableCell>
              <TableCell>Credits</TableCell>
              <TableCell>Current</TableCell>
              <TableCell>Target</TableCell>
              <TableCell>Required Final</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.credits}</TableCell>
                <TableCell>{row.current}</TableCell>
                <TableCell>{row.target}</TableCell>
                <TableCell sx={{ color: row.statusColor }}>
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography color="text.secondary" sx={{ py: 6, textAlign: "center" }}>
          No subjects yet. Add subjects in the Forecast page to see performance.
        </Typography>
      )}
    </Paper>
  );
}

export default PerformanceTable;

