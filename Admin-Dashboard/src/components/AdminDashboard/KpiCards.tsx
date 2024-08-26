import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";

interface TrendIconProps {
  isPositive: boolean;
}

interface TrendTypographyProps extends TrendIconProps {
  percentage: number;
}

interface CircularProgressWithLabelProps extends TrendTypographyProps {
  color: "info" | "error" | "warning" | "secondary" | "primary";
}
interface cardItemsDetailsType extends CircularProgressWithLabelProps {
  name: string;
  value: string;
}

const cardItemsDetails: cardItemsDetailsType[] = [
  {
    name: "Revenue",
    value: "$34000",
    percentage: 40,
    isPositive: true,
    color: "info",
  },
  {
    name: "Users",
    value: "4000",
    percentage: 14,
    isPositive: false,
    color: "error",
  },
  {
    name: "Transactions",
    value: "23000",
    percentage: 80,
    isPositive: true,
    color: "warning",
  },
  {
    name: "Products",
    value: "1000",
    percentage: 30,
    isPositive: true,
    color: "secondary",
  },
];

const TrendIcon = ({ isPositive }: TrendIconProps) =>
  isPositive ? <TrendingUp color="success" /> : <TrendingDown color="error" />;

const TrendTypography = ({ isPositive, percentage }: TrendTypographyProps) => (
  <Typography
    variant="subtitle1"
    sx={{ display: "flex", alignItems: "center", gap: 1 }}
    color={isPositive ? "green" : "red"}
  >
    <TrendIcon isPositive={isPositive} />
    {isPositive ? `+${percentage}%` : `-${percentage}%`}
  </Typography>
);

const CircularProgressWithLabel = ({
  percentage,
  color,
  isPositive,
}: CircularProgressWithLabelProps) => (
  <Box sx={{ position: "relative", display: "inline-flex" }}>
    <CircularProgress
      variant="determinate"
      size={60}
      value={percentage}
      color={color}
    />
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="body2" component="div" color="text">
        {isPositive ? `+${percentage}%` : `-${percentage}%`}
      </Typography>
    </Box>
  </Box>
);

export default function KpiCards() {
  return (
    <Grid container justifyContent="space-between" spacing={2} marginY={2}>
      {cardItemsDetails.map(
        ({ name, value, percentage, isPositive, color }) => (
          <Grid key={name} item xs={12} sm={12} md={5} lg={3}>
            <Paper
              sx={{
                p: 2,
                width: "100%",
              }}
              elevation={3}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                p={1}
              >
                <Box>
                  <Typography variant="caption">{name}</Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {value}
                  </Typography>
                  <TrendTypography
                    isPositive={isPositive}
                    percentage={percentage}
                  />
                </Box>
                <CircularProgressWithLabel
                  percentage={percentage}
                  color={color}
                  isPositive={isPositive}
                />
              </Stack>
            </Paper>
          </Grid>
        )
      )}
    </Grid>
  );
}
