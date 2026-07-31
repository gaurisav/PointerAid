import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function KPICard({ title, value, color }) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardContent>
        <Typography
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography
          variant="h3"
          color={color}
          fontWeight={700}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default KPICard;

