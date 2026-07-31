import {
  TableRow,
  TableCell,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

function SubjectRow({ subject, index, onChange, onDelete }) {
    const current = Number(subject.current) || 0;
    const target = Number(subject.target) || 0;
    const requiredFinal = target - current;
    return (
        <TableRow>
            <TableCell>
        <TextField
          fullWidth
          value={subject.name}
          onChange={(e) =>
            onChange(index, "name", e.target.value)
          }
          placeholder="Subject Name"
        />
            </TableCell>

      <TableCell>
        <TextField
          type="number"
          value={subject.credits}
          onChange={(e) =>
            onChange(index, "credits", e.target.value)
          }
        />
      </TableCell>

      <TableCell>
        <TextField
          type="number"
          value={subject.current}
          onChange={(e) =>
            onChange(index, "current", e.target.value)
          }
        />
      </TableCell>

      <TableCell>
        <TextField
          type="number"
          value={subject.target}
          onChange={(e) =>
            onChange(index, "target", e.target.value)
          }
        />
      </TableCell>

      <TableCell>
        {subject.current && subject.target ? (
          requiredFinal > 60 ? (
            <Typography color="error">
              Impossible
            </Typography>
          ) : requiredFinal <= 0 ? (
            <Typography color="success.main">
              Achieved
            </Typography>
          ) : (
            <Typography color="primary">
              {requiredFinal} / 60
            </Typography>
          )
        ) : (
          "-"
        )}
      </TableCell>

      <TableCell align="center">
        <IconButton
          color="error"
          onClick={() => onDelete(index)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default SubjectRow;