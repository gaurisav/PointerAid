import { Container } from "@mui/material";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardCards from "../components/dashboard/DashboardCards";
import CGPAProjectionChart from "../components/charts/CGPAProjectionChart";
import QuickActions from "../components/dashboard/QuickActions";
import RecentForecasts from "../components/dashboard/RecentForecasts";

function Dashboard() {
  return (
    <Container maxWidth="xl">
      <DashboardHeader />

      <DashboardCards />

      <CGPAProjectionChart
        currentCGPA={8.42}
        targetCGPA={9.0}
      />

      <QuickActions />

      <RecentForecasts />
    </Container>
  );
}

export default Dashboard;

