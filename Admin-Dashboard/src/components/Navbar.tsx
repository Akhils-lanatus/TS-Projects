import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";

interface NavbarProps {
  onDrawerToggle: () => void;
}

const Navbar = ({ onDrawerToggle }: NavbarProps) => {
  const { pathname }: { pathname: string } = useLocation();
  const navbarTitleElemnts: Array<string> = pathname.split("/");
  const navbarTitle: string =
    navbarTitleElemnts[navbarTitleElemnts.length - 1] || "Welcome";

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - 240px)` },
        ml: { sm: "240px" },
        boxSizing: "border-box",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          textTransform={"capitalize"}
        >
          {navbarTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
