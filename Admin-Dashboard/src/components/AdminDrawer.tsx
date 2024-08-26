import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import PaidIcon from "@mui/icons-material/Paid";
import CategoryIcon from "@mui/icons-material/Category";
import BarChartIcon from "@mui/icons-material/BarChart";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import TimerIcon from "@mui/icons-material/Timer";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const drawerWidth = 240;

const dashboardItems = [
  { name: "Dashboard", link: "/admin/dashboard", Icon: DashboardIcon },
  { name: "Customers", link: "/admin/customers", Icon: DownhillSkiingIcon },
  { name: "Transactions", link: "/admin/transaction", Icon: PaidIcon },
  { name: "Products", link: "/admin/products", Icon: CategoryIcon },
];

const cartItems = [
  { name: "Bar", link: "/admin/charts/bar", Icon: BarChartIcon },
  {
    name: "Pie",
    link: "/admin/charts/pie",
    Icon: PieChartIcon,
  },
  { name: "Line", link: "/admin/charts/line", Icon: SsidChartIcon },
];

const appItems = [
  {
    name: "Coupon",
    link: "/admin/apps/coupon",
    Icon: ConfirmationNumberIcon,
  },
  { name: "Stopwatch", link: "/admin/apps/stopwatch", Icon: TimerIcon },
  { name: "Coin Toss", link: "/admin/apps/toss", Icon: SportsEsportsIcon },
];

const AdminDrawer = ({ children }: { children: ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar onDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Sidebar
            dashboardItems={dashboardItems}
            cartItems={cartItems}
            appItems={appItems}
            onDrawerToggle={handleDrawerToggle}
          />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Sidebar
            dashboardItems={dashboardItems}
            cartItems={cartItems}
            appItems={appItems}
            onDrawerToggle={handleDrawerToggle}
          />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingBlock: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          boxSizing: "border-box",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AdminDrawer;
