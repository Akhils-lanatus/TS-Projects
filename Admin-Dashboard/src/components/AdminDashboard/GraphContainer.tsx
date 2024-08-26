import { Grid, LinearProgress, Paper, Typography } from "@mui/material";
import BarChart from "../Charts/Bar/BarChart";

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

const titleStyle = {
  mb: { xs: 2, sm: 2, md: 4, lg: 6 },
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
const GraphContainer = () => (
  <Grid
    container
    spacing={2}
    justifyContent="center"
    alignItems="stretch"
    marginY={2}
  >
    <Grid item xs={12} lg={9}>
      <Paper sx={paperStyle} elevation={3}>
        <Typography textAlign="center" variant="h6" sx={titleStyle}>
          Revenue & Transaction
        </Typography>
        <BarChart
          data_1={[300, 144, 433, 655, 237, 755, 190]}
          data_2={[200, 444, 343, 555, 778, 455, 900]}
          title_1="Revenue"
          title_2="Transaction"
          bgColor_1="rgb(0,115,255)"
          bgColor_2="rgba(53,162,235,0.8)"
        />
      </Paper>
    </Grid>
    <Grid item xs={12} lg={3}>
      <Paper sx={paperStyle} elevation={3}>
        <Typography textAlign="center" variant="h6" sx={titleStyle}>
          Inventory
        </Typography>
        {inventoryItems.map((item) => (
          <InventoryItemComponent key={item.name} {...item} />
        ))}
      </Paper>
    </Grid>
  </Grid>
);

export default GraphContainer;
