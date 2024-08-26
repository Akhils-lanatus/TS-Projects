import { Grid, LinearProgress, Paper, Typography } from "@mui/material";
import { DoughnutChart } from "../Charts/Doughnut/DoughnutChart";

interface InventoryItem {
  name: string;
  value: number;
  color: "info" | "error" | "warning" | "secondary" | "primary" | "success";
}

// Sample inventory data
const inventoryItems: InventoryItem[] = [
  { name: "Laptops", value: 40, color: "info" },
  { name: "Shoes", value: 14, color: "success" },
  { name: "Cameras", value: 80, color: "warning" },
  { name: "Jeans", value: 30, color: "secondary" },
];

// Styles
const paperStyle = {
  p: 2,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

// InventoryItem Component
const InventoryItemComponent = ({ name, value, color }: InventoryItem) => (
  <Grid
    container
    sx={{ mb: 2, width: "100%" }}
    alignItems="center"
    justifyContent="center"
  >
    <Grid item xs={3} lg={4.5}>
      <Typography variant="body2" color="text.secondary" letterSpacing={1}>
        {name}
      </Typography>
    </Grid>
    <Grid item xs={7} lg={5}>
      <LinearProgress variant="determinate" color={color} value={value} />
    </Grid>
    <Grid item xs={2} lg={2.5} textAlign="end">
      <Typography variant="body2" fontWeight="bold" color="text.primary">
        {`${value}%`}
      </Typography>
    </Grid>
  </Grid>
);

// Main Component
const RationAndTransactionContainer = () => (
  <Grid
    container
    spacing={2}
    justifyContent="center"
    alignItems="stretch"
    marginY={2}
  >
    <Grid item xs={12} sm={6} md={3} lg={3}>
      <Paper sx={paperStyle} elevation={3}>
        <Typography textAlign="center" variant="h6" sx={{ marginBlock: 1 }}>
          Gender Ratio
        </Typography>
        <DoughnutChart
          labels={["Male", "Female"]}
          data={[19, 12]}
          backgroundColor={["rgba(52,162,235,0.8)", "hsl(340,82%,56%)"]}
          cutout={65}
        />
      </Paper>
    </Grid>
    <Grid item xs={12} sm={12} md={9} lg={9}>
      <Paper sx={paperStyle} elevation={3}>
        <Typography textAlign="center" variant="h6" sx={{ marginBlock: 1 }}>
          Gender Ratio
        </Typography>
        {inventoryItems.map((item) => (
          <InventoryItemComponent key={item.name} {...item} />
        ))}
      </Paper>
    </Grid>
  </Grid>
);

export default RationAndTransactionContainer;
