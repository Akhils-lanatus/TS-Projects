import { NavLink } from "react-router-dom";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface SidebarListItemTypes {
  name: string;
  link: string;
  Icon: SvgIconComponent;
}

interface SidebarProps {
  dashboardItems: SidebarListItemTypes[];
  cartItems: SidebarListItemTypes[];
  appItems: SidebarListItemTypes[];
  onDrawerToggle: () => void;
}

const Sidebar = ({
  cartItems,
  dashboardItems,
  appItems,
  onDrawerToggle,
}: SidebarProps) => {
  const theme = useTheme();
  return (
    <Box>
      <NavLink to={"/"}>
        <Typography
          fontFamily={"cursive"}
          fontSize={"x-large"}
          p={2.5}
          textAlign={"center"}
        >
          Hello Guyz
        </Typography>
      </NavLink>
      <Divider />
      <List>
        <Typography
          fontSize={"large"}
          fontWeight={"bold"}
          color={theme.palette.primary.main}
          p={1}
        >
          Dashboard
        </Typography>
        {dashboardItems.map((item) => (
          <ListItem disablePadding key={item.name}>
            <NavLink
              to={item.link}
              style={({ isActive }: { isActive: boolean }) => {
                return {
                  textDecoration: "none",
                  backgroundColor: isActive ? "#b6d8e0" : "#fff",
                  width: "100%",
                };
              }}
              onClick={onDrawerToggle}
            >
              <ListItemButton>
                <ListItemIcon>
                  <item.Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText secondary={item.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Divider />
      <List>
        <Typography
          fontSize={"large"}
          fontWeight={"bold"}
          color={theme.palette.primary.main}
          p={1}
        >
          Charts
        </Typography>
        {cartItems.map((item) => (
          <ListItem disablePadding key={item.name}>
            <NavLink
              to={item.link}
              style={({ isActive }: { isActive: boolean }) => {
                return {
                  textDecoration: "none",
                  backgroundColor: isActive ? "#b6d8e0" : "#fff",
                  width: "100%",
                };
              }}
              onClick={onDrawerToggle}
            >
              <ListItemButton>
                <ListItemIcon>
                  <item.Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText secondary={item.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Divider />
      <List>
        <Typography
          fontSize={"large"}
          fontWeight={"bold"}
          color={theme.palette.primary.main}
          p={1}
        >
          Apps
        </Typography>
        {appItems.map((item) => (
          <ListItem disablePadding key={item.name}>
            <NavLink
              to={item.link}
              style={({ isActive }: { isActive: boolean }) => {
                return {
                  textDecoration: "none",
                  backgroundColor: isActive ? "#b6d8e0" : "#fff",
                  width: "100%",
                };
              }}
              onClick={onDrawerToggle}
            >
              <ListItemButton>
                <ListItemIcon>
                  <item.Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText secondary={item.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
};

export default Sidebar;
