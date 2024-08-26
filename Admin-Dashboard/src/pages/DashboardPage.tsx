import { Container } from "@mui/material";
import AdminDashboardSearchBar from "../components/AdminDashboard/SearchBar";
import KpiCards from "../components/AdminDashboard/KpiCards";
import GraphContainer from "../components/AdminDashboard/GraphContainer";

const Dashboard = () => {
  return (
    <Container
      sx={{
        width: {
          lg: "100% !important",
          md: "100% !important",
          sm: "99% !important",
          xs: "99% !important",
        },
      }}
    >
      <AdminDashboardSearchBar />
      {/* KPI cards - Key Performance Indicators 🥵 */}
      <KpiCards />
      <GraphContainer />
    </Container>
  );
};

export default Dashboard;
